# بناء خط أنابيب CI/CD متكامل واحترافي باستخدام GitHub Actions

تعتبر الأتمتة (Automation) عصب هندسة البرمجيات الحديثة. لم يعد هناك مجال للنشر اليدوي عبر بروتوكولات FTP أو الاتصال المباشر بالخوادم عبر SSH ورفع الملفات يدوياً. يوفر GitHub Actions منصة مرنة وقوية تُمكّنك من أتمتة كل مرحلة: من فحص التنسيق والاختبارات الآلية إلى النشر على السحابة مع كل Pull Request أو Push.

---

## 1. مخطط تدفق خط الأنابيب (Pipeline Flow)

```
 [ مطور يدفع الكود (Push / PR) ]
               │
               ▼
 ┌───────────────────────────────┐
 │   مرحلة الفحص والاختبار (CI)   │
 │   - فحص التنسيق ولغة الكود    │
 │   - تشغيل اختبارات Unit/Integration │
 │   - التدقيق الأمني وفحص الحزم │
 └──────────────┬────────────────┘
                │ نجاح الاختبارات
                ▼
 ┌───────────────────────────────┐
 │   مرحلة بناء الصورة (Build)    │
 │   - بناء صورة Docker          │
 │   - تفعيل الـ Cache للتسريع   │
 │   - رفع الصورة إلى السجل      │
 └──────────────┬────────────────┘
                │ الدمج مع main
                ▼
 ┌───────────────────────────────┐
 │    مرحلة النشر الحي (CD)      │
 │   - تحديث خوادم الإنتاج       │
 │   - إرسال إشعار للمطورين      │
 └───────────────────────────────┘
```

---

## 2. إعداد ملف الـ Workflow الكامل (`.github/workflows/deploy.yml`)

فيما يلي خط أنابيب جاهز لبيئات الإنتاج يحتوي على إدارة الكاش، والاختبار المتوازي، وحماية المفاتيح السرية:

```yaml
name: Production CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  # -------------------------------------------------------------
  # المرحلة الأولى: الاختبار والتحليل الثابت
  # -------------------------------------------------------------
  lint-and-test:
    name: Lint & Automated Tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Code Linter
        run: npm run lint

      - name: Execute Unit & Integration Tests
        run: npm test -- --coverage

  # -------------------------------------------------------------
  # المرحلة الثانية: بناء الحاوية والنشر للإنتاج
  # -------------------------------------------------------------
  deploy:
    name: Build & Deploy to Production
    needs: lint-and-test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: actions/setup-buildx-action@v3

      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/my-app:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Trigger Production Deployment Webhook
        run: |
          echo "جاري النشر التلقائي عبر Webhook..."
          curl -X POST -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \
            https://api.mycloud.com/deploy/v1/trigger
```

---

## 3. ثلاث نصائح احترافية لتوفير الوقت والتكلفة

### 1. استغلال GitHub Actions Cache بذكاء
تنزيل الاعتماديات (Dependencies) مع كل تشغيل يهدر دقائق ثمينة. استخدم خاصية الـ Cache المدمجة مع أدوات مثل `actions/setup-node` أو `actions/setup-java` لتسريع البناء بنسبة تصل إلى 60%.

### 2. تقسيم المهام عبر Jobs متوازية
بدلاً من تشغيل الاختبارات بالتعاقب، شغل اختبارات الواجهة واختبارات الأنظمة الخلفية بالتوازي عبر وظائف منفصلة `jobs`.

### 3. تقييد صلاحيات الأذونات (Permissions)
طبق مبدأ الصلاحيات الأقل (Least Privilege) في ملف التكوين:

```yaml
permissions:
  contents: read
  packages: write
```

> **تنبيه أمني:** لا تقم أبداً بطباعة المتغيرات السرية (`secrets`) في سطر الأوامر أو استخدامها في صدى الشاشة (`echo $SECRET`) حتى لا تظهر في سجلات التشغيل المكشوفة للفريق.
