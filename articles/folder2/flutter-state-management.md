# مقارنة شاملة لأنماط إدارة الحالة (State Management) في Flutter

تعتبر إدارة الحالة (State Management) من أهم المواضيع التي يواجهها أي مطور Flutter. فاختيار الأسلوب المناسب يؤثر بشكل مباشر على أداء التطبيق، سهولة قراءة الكود، وإمكانية اختبار منطق العمل (Unit Testing).

في هذا المقال، سنقارن بين أشهر ثلاثة أنماط مستخدمة في مجتمع Flutter: **Provider**، **BLoC**، و **Riverpod**.

---

## 1. نمط Provider: البساطة وسهولة البداية

يُعد **Provider** الأسلوب الموصى به من قبل فريق Flutter للمشاريع الصغيرة والمتوسطة. يعتمد على فكرة الـ InheritedWidget المضمنة في Flutter ولكن بواجهة أسهل بكثير.

### المميزات:
- منحنى تعلم سهل ومناسب للمبتدئين.
- خفيف جداً ولا يحتاج إلى كود تمهيدي (Boilerplate) كبير.
- كافٍ لأغلب التطبيقات المعتادة.

### العيوب:
- يعتمد على `BuildContext` للوصول إلى الحالة، مما قد يسبب مشاكل خارج شجرة الواجهات (Widgets Tree).

---

## 2. نمط BLoC (Business Logic Component): للمشاريع الضخمة والفرق الكبيرة

يقوم نمط **BLoC** بفصل منطق العمل تماماً عن الواجهات من خلال معمارية قائمة على الأحداث (Event-Driven Architecture) والـ Streams.

```dart
// تعريف الأحداث (Events)
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}

// تعريف الحالة (State)
class CounterState {
  final int count;
  CounterState(this.count);
}

// الـ Bloc
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) {
      emit(CounterState(state.count + 1));
    });
  }
}
```

### المميزات:
- فصل تام ومثالي بين الـ UI والـ Logic.
- إمكانية تتبع مسار الأحداث والحالات بالكامل (Traceability).
- ممتاز جداً للاختبارات الآلية (Unit Testing).

---

## 3. نمط Riverpod: التطوير العصري للـ Provider

تم إنشاء **Riverpod** بواسطة نفس مطور Provider (Remi Rousselet) لحل جميع التحديات ونقاط الضعف التي كانت موجودة في Provider.

| الميزة | Provider | BLoC | Riverpod |
| :--- | :--- | :--- | :--- |
| **الاعتماد على Context** | نعم | نعم | لا (آمن عند الـ Compile Time) |
| **كود البداية (Boilerplate)** | منخفض | متوسط إلى عالي | منخفض إلى متوسط |
| **سهولة الاختبار** | متوسط | ممتاز جداً | ممتاز جداً |
| **مناسب لـ** | مشاريع صغيرة/متوسطة | مشاريع المؤسسات الضخمة | جميع أنواع المشاريع |

---

## الخلاصة والتوصية

- إذا كنت تبني تطبيقاً صغيراً أو تتعلم فلاتر: ابدأ بـ **Provider**.
- إذا كنت تعمل في فريق كبير على تطبيق بنكي أو نظام ضخم: اختر **BLoC**.
- إذا كنت تريد حلاً حديثاً وقوياً ومرناً لجميع الحالات: **Riverpod** هو خيارك الأفضل.
