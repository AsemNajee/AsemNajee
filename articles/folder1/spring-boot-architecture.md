# دليل بناء معمارية REST APIs متكاملة باستخدام Spring Boot

تعد معمارية تطبيقات الويب والـ APIs حجر الزاوية في نجاح أي نظام برمجي. في هذا الدليل، سنتناول بالتفصيل كيفية بناء **RESTful API** قوية وقابلة للتوسع (Scalable) باستخدام إطار العمل **Spring Boot** مع تطبيق أفضل الممارسات والمعايير العالمية.

---

## 1. معمارية الطبقات (Layered Architecture)

أفضل وأوضح طريقة لتنظيم مشاريع Spring Boot هي تقسيم الكود إلى أربع طبقات رئيسية:

```
src/main/java/com/asem/api/
├── controller/     # استقبال الطلبات وإرجاع الردود (HTTP endpoints)
├── service/        # منطق العمل وقواعد النظام (Business Logic)
├── repository/     # التعامل المباشر مع قاعدة البيانات (Spring Data JPA)
├── model/          # الكيانات (Entities) وجداول قاعدة البيانات
├── dto/            # كائنات نقل البيانات (Data Transfer Objects)
└── exception/      # التعامل المركزي مع الأخطاء والاستثناءات
```

> **ملاحظة مهمة:** لا تجعل طبقة الـ Controller تتعامل مع الـ Repository مباشرة أبداً. احتفظ بمنطق العمل دائماً داخل طبقة الـ Service لتحقيق مبدأ المسؤولية الواحدة (Single Responsibility Principle).

---

## 2. استخدام DTOs وفصلها عن Entities

أحد الأخطاء الشائعة هو إرجاع كائنات `Entity` مباشرة للمستخدم في استجابات الـ API. هذا يسبب:
1. تسريب حقول حساسة (مثل كلمات المرور أو التواريخ الداخلية).
2. مشاكل التكرار اللانهائي في العلاقات (Circular Reference) أثناء تحويل JSON.
3. صعوبة تغيير بنية قاعدة البيانات لاحقاً دون كسر الـ API لدى العملاء.

### مثال تطبيقي على كائن DTO:

```java
package com.asem.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record StudentRequestDto(
    @NotBlank(message = "الاسم الأول مطلوب")
    @Size(min = 2, max = 50, message = "يجب أن يكون الاسم بين حرفين و50 حرفاً")
    String firstName,

    @NotBlank(message = "الاسم الأخير مطلوب")
    String lastName,

    @NotBlank(message = "البريد الإلكتروني مطلوب")
    @Email(message = "صيغة البريد الإلكتروني غير صحيحة")
    String email
) {}
```

---

## 3. التعامل المركزي مع الأخطاء (Global Exception Handling)

بدلاً من كتابة `try-catch` في كل مكان، نستخدم `@RestControllerAdvice` لتوحيد صيغة رسائل الخطأ في كامل التطبيق:

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ApiErrorResponse error = new ApiErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(err -> 
            errors.put(err.getField(), err.getDefaultMessage())
        );
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
```

---

## 4. نصائح للأداء في بيئات الإنتاج

- **استخدم Connection Pooling:** مثل HikariCP المضمن افتراضياً في Spring Boot.
- **تفعيل Pagination:** لا تقم بإرجاع آلاف السجلات دفعة واحدة، استخدم `Pageable` دائماً.
- **التوثيق عبر Swagger/OpenAPI:** اجعل توثيق الـ API يتحدث تلقائياً مع كل تعديل على الكود.

---

### خاتمة

اتباع هذه المعايير يضمن أن يكون نظامك قادراً على تحمل الضغط، سهل الاختبار (Testable)، وسهل الصيانة والتطوير لأي مطور ينضم إلى فريقك لاحقاً.
