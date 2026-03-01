import { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);

  const faqReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("عمرة")) {
      return "رحلات العمرة متاحة عبر باقات متنوعة تناسب الجميع. يمكنك اختيار الباقة المناسبة من صفحة الباقات.";
    }

    if (msg.includes("حجز")) {
      return "يمكنك الحجز عبر صفحة الحجز. بعد إتمام البيانات سيتم التواصل معك للتأكيد.";
    }

    if (msg.includes("أسعار") || msg.includes("سعر")) {
      return "الأسعار تختلف حسب الباقة وعدد الأيام. زور صفحة الباقات لمعرفة التفاصيل.";
    }

    if (msg.includes("مواصلات")) {
      return "نوفر مواصلات مريحة ومكيفة من نقطة التجمع إلى مكة والمدينة حسب الباقة.";
    }

    if (msg.includes("فندق")) {
      return "الفنادق قريبة من الحرم ضمن برامج مختلفة لتناسب جميع الميزانيات.";
    }

    if (msg.includes("تأشيرة")) {
      return "نساعدك في إجراءات التأشيرة ضمن برامج العمرة.";
    }

    if (msg.includes("دفع")) {
      return "يمكن الدفع عبر وسائل متعددة حسب سياسة الرحلات.";
    }

    if (msg.includes("موعد")) {
      return "موعد الرحلة يتم تحديده حسب الباقة التي تختارها.";
    }

    if (msg.includes("الأطفال")) {
      return "يمكن اصطحاب الأطفال حسب شروط الباقة. تواصل معنا لمعرفة التفاصيل.";
    }

    if (msg.includes("مدة")) {
      return "مدة الرحلة تختلف حسب الباقة، عادة من 3 إلى 5 يومًا.";
    }

    if (msg.includes("مرشد")) {
      return "يوجد مرشد مرافق لتسهيل أداء المناسك وتقديم الإرشادات.";
    }

    if (msg.includes("برنامج")) {
      return "نقدم برامج متنوعة للعمرة والمدينة حسب اختيارك.";
    }

    if (msg.includes("خصم")) {
      return "الخصومات متاحة حسب الموسم والباقات. تابع صفحة العروض.";
    }

    if (msg.includes("أوراق")) {
      return "الأوراق المطلوبة: جواز سفر ساري + تأشيرة حسب البرنامج.";
    }

    if (msg.includes("تقسيط")) {
      return "التقسيط متاح حسب سياسة البرنامج. تواصل معنا للتفاصيل.";
    }

    return "عذرًا، لم أفهم سؤالك. اختر سؤالًا من الأسئلة الجاهزة.";
  };

  const sendFaq = (question) => {
    const userMsg = { sender: "user", text: question };
    const botMsg = { sender: "bot", text: faqReply(question) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="chat-wrapper">

      <div className="chat-header">
        <h2>الشات</h2>
        <p>اختر سؤالًا جاهزًا للرد</p>
      </div>

      <div className="chat-body">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.sender === "user" ? "chat-message user" : "chat-message bot"}
          >
            <span>{m.sender === "user" ? "👤" : "🤖"}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-footer">

        <div className="chat-questions">

          {/* أسئلة العمرة */}
          <button onClick={() => sendFaq("ما هي العمرة؟")}>ما هي العمرة؟</button>
          <button onClick={() => sendFaq("كيف أحجز رحلة عمرة؟")}>كيف أحجز؟</button>
          <button onClick={() => sendFaq("ما هي باقات العمرة؟")}>باقات العمرة</button>
          <button onClick={() => sendFaq("ما أسعار رحلات العمرة؟")}>الأسعار</button>
          <button onClick={() => sendFaq("كم مدة الرحلة؟")}>مدة الرحلة</button>
          <button onClick={() => sendFaq("هل يوجد برنامج للمدينة؟")}>المدينة</button>
          <button onClick={() => sendFaq("هل يوجد مرشد؟")}>المرشد</button>
          <button onClick={() => sendFaq("هل يوجد خصم؟")}>الخصومات</button>

          {/* أسئلة الحجز */}
          <button onClick={() => sendFaq("كيف أحجز؟")}>طريقة الحجز</button>
          <button onClick={() => sendFaq("كيف أدفع الحجز؟")}>طريقة الدفع</button>
          <button onClick={() => sendFaq("هل يوجد تقسيط؟")}>التقسيط</button>
          <button onClick={() => sendFaq("هل الحجز مؤكد؟")}>تأكيد الحجز</button>

          {/* أسئلة المواصلات والفندق */}
          <button onClick={() => sendFaq("هل يوجد مواصلات؟")}>المواصلات</button>
          <button onClick={() => sendFaq("هل المواصلات مكيفة؟")}>مكيفة؟</button>
          <button onClick={() => sendFaq("هل الفندق قريب من الحرم؟")}>الفندق</button>
          <button onClick={() => sendFaq("هل أختار الفندق؟")}>اختيار الفندق</button>

          {/* أسئلة عامة */}
          <button onClick={() => sendFaq("هل يوجد أطفال؟")}>الأطفال</button>
          <button onClick={() => sendFaq("ما الأوراق المطلوبة؟")}>الأوراق</button>
          <button onClick={() => sendFaq("هل يوجد تأشيرة؟")}>التأشيرة</button>
          <button onClick={() => sendFaq("متى موعد الرحلة؟")}>الموعد</button>

        </div>

      </div>

    </div>
  );
}

export default Chat;