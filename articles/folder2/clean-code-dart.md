# مبادئ الكود النظيف وأفضل الممارسات في لغة Dart

تتميز لغة **Dart** بحداثتها ودعمها القوي للـ Type Safety والـ Sound Null Safety. ولكن كتابة كود بلغة قوية لا يعني بالضرورة أن الكود نظيف وسهل الصيانة.

في هذا الدليل، نستعرض أهم الممارسات لكتابة كود Dart احترافي وعالي الجودة.

---

## 1. الاستفادة الكاملة من Null Safety

تجنب استخدام عامل التأكيد `!` (Bang operator) إلا في أضيق الحدود عندما تكون متأكداً 100% أن القيمة ليست `null`.

```dart
// ❌ تجنب هذا النمط
String formatUserName(User? user) {
  return user!.name.toUpperCase(); // قد يسبب Crash في وقت التشغيل!
}

// ✅ الأسلوب الصحيح والآمن
String formatUserName(User? user) {
  return user?.name.toUpperCase() ?? 'زائر';
}
```

---

## 2. استخدام Switch Expressions والـ Pattern Matching

بدءاً من إصدار Dart 3، أصبحت ميزة الـ Pattern Matching والـ Switch Expressions أداة جبارة لتبسيط الكود:

```dart
// أسلوب switch expression العصري
String getStatusMessage(OrderStatus status) => switch (status) {
  OrderStatus.pending => 'الطلب قيد المراجعة',
  OrderStatus.processing => 'جاري تجهيز الطلب',
  OrderStatus.shipped => 'الطلب في الطريق إليك',
  OrderStatus.delivered => 'تم تسليم الطلب بنجاح',
  OrderStatus.cancelled => 'تم إلغاء الطلب',
};
```

---

## 3. تفضيل Records والـ Destructuring

بدلاً من إنشاء كلاس كامل فقط لإرجاع قيمتين أو ثلاث من دالة:

```dart
// إرجاع زوج من القيم عبر Record
(double lat, double lng) getCurrentCoordinates() {
  return (15.3694, 44.1910);
}

// استخراج القيم مباشرة
final (latitude, longitude) = getCurrentCoordinates();
```

---

## 4. كتابة الـ Extension Methods لتحسين القراءة

الـ Extensions تسمح لك بإضافة دوال مساعدة للكلاسات المدمجة دون تعديلها:

```dart
extension StringExtensions on String {
  bool get isValidEmail => RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(this);
  
  String get capitalizeFirst => isEmpty 
      ? this 
      : '${this[0].toUpperCase()}${substring(1)}';
}
```

---

## خلاصة

الكود النظيف في Dart ليس مجرد اتباع لقواعد الـ Linter، بل هو أسلوب تفكير يركز على جعل الكود وثيقة حية وسهلة الفهم لأي مبرمج يقرأه بعدك.
