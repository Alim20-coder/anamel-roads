// 1. تأثير الكتابة (Typing Effect) لمدح الشركة
const text = "دقةٌ في الإنجاز.. فخامةٌ في التنفيذ";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // سرعة الكتابة
    }
}

// 2. تأثير الـ Parallax (حركة العناصر مع الماوس)
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    document.querySelector('.hero-bg').style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`;

    document.getElementById('parallax-text').style.transform = `translateX(${-x*2}px) translateY(${-y*2}px)`;
    

    });
window.onload = typeEffect;
// Hero logic end 
const servicesData = [
    {
        title: "قشط الأسفلت القديم",
        desc: "نعتمد على أسطول من القشاطات الذكية المزودة بأنظمة مستشعرات لضبط العمق، مما يضمن إزالة الطبقات التالفة بدقة مليمترية وتجهيز السطح كلياً لاستقبال المعالجات الجديدة دون أي عيوب إنشائية.",
        footer: "دقة في الإزالة والمعالجة",
        icon: "fa-hammer"
    },
    {
        title: "توريد الأسفلت عالي الجودة",
        desc: "نلتزم بتوريد أفضل الخلطات الأسفلتية (الحارة والباردة) المصنعة وفق أرقى المواصفات الفنية لوزارة النقل، مع إجراء اختبارات معملية دقيقة لضمان قوة التماسك ومقاومة الأحمال الثقيلة والظروف المناخية القاسية.",
        footer: "خامات معتمدة ومختبرة",
        icon: "fa-truck-loading"
    },
    {
        title: "فرد الأسفلت بدقة",
        desc: "باستخدام أحدث فرادات الأسفلت (Pavers) الموجهة إلكترونياً، نضمن لك توزيعاً انسيابياً ومتساوياً تماماً، مع مراعاة أدق الميول الهندسية لضمان تصريف مياه الأمطار بكفاءة وحماية الطريق من التآكل المستقبلي.",
        footer: "انسيابية مثالية للأداء",
        icon: "fa-layer-group"
    },
    {
        title: "صيانة الطرق والترميم",
        desc: "نقدم حلولاً هندسية متكاملة لترميم وتجديد الطرق المتهالكة، تشمل معالجة الحفر والتشققات الطولية والعرضية بمواد مالئة متطورة، بالإضافة إلى برامج الصيانة الوقائية التي تطيل العمر الافتراضي للطريق.",
        footer: "حلول مستدامة وطويلة الأمد",
        icon: "fa-tools"
    },
    {
        title: "أعمال التمهيد والتسوية",
        desc: "نؤمن بأن جودة الطريق تبدأ من جودة الأساس؛ لذا نقوم بأعمال الحفر والردم وتسوية طبقات (البيسكورس) بدقة متناهية، مع استخدام مداحل (دكاكات) ثقيلة لضمان أعلى درجات الضغط والتماسك ومنع الهبوط المستقبلي.",
        footer: "تأسيس هندسي صلب",
        icon: "fa-road"
    },
    {
        title: "تأجير معدات الأسفلت",
        desc: "نوفر لعملائنا فرصة الاستفادة من أسطولنا الضخم والمتنوع من المعدات الإنشائية الحديثة، والتي تشمل الجريدرات والفرادات والقشاطات بمختلف أحجامها، مع توفير أطقم تشغيل وفنيين على أعلى مستوى من المهارة.",
        footer: "أسطول متطور لخدمتكم",
        icon: "fa-truck-monster"
    }
];

const container = document.getElementById('services-container');

servicesData.forEach(service => {
    const cardHTML = `
        <div class="col-lg-4 col-md-6">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="icon-box"><i class="fas ${service.icon}"></i></div>
                        <h3>${service.title}</h3>
                        <p>${service.desc}</p>
                        <span class="card-footer-text">${service.footer}</span>
                    </div>
                
                </div>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});
// Second logic end ////////////////////////////////////////////////
// البيانات مستخرجة من الصورة
const timelineData = [
    { title: "نتائج مثمرة وسمعة طيبة", desc: "نفخر ببناء جسور من الثقة مع عملائنا عبر سنوات من الإنجاز والنتائج الملموسة التي تتحدث عن نفسها.", icon: "fa-chart-line" },
    { title: "فريق عمل محترف ومدرب", desc: "نمتلك نخبة من المهندسين والفنيين بخبرات دولية، لضمان حلول مبتكرة لأصعب تحديات تمهيد الطرق.", icon: "fa-users-cog" },
    { title: "إمكانيات تقنية وعالية", desc: "نستثمر في أحدث المعدات العالمية ونستخدم مواد خام عالية الجودة لضمان أقصى درجات الصلابة.", icon: "fa-hard-hat" },
    { title: "الجاهزية التامة للمشاريع", desc: "أسطولنا الضخم جاهز للبدء الفوري، مما يضمن عدم توقف العمل تحت أي ظرف من الظروف.", icon: "fa-truck-monster" },
    { title: "الالتزام الدقيق بالمواعيد", desc: "الوقت هو المحرك الأساسي؛ لذا نلتزم بجداول زمنية صارمة لتسليم المشاريع في وقتها المحدد.", icon: "fa-history" }
];

const wrapper = document.getElementById('timeline-wrapper');

timelineData.forEach((item, index) => {
    const isLeft = index % 2 === 0; 
    const itemHTML = `
        <div class="timeline-row ${isLeft ? 'left-row' : 'right-row'}">
            <div class="timeline-card">
                <h3 class="card-title-text">${item.title}</h3>
                <p class="card-desc-text">${item.desc}</p>
            </div>
            <div class="timeline-icon">
                <i class="fas ${item.icon}"></i>
            </div>
        </div>
    `;
    wrapper.innerHTML += itemHTML;
});
// Service Logic /////////////////////////////////////////
const blogs = [
    {
        title: "أهمية مشاريع الطرق في دعم التنمية المستدامة",
        desc: "تعد شبكات الطرق الحديثة العمود الفقري لأي نهضة اقتصادية، حيث تساهم في...",
        img: "./Styles/Photos/one.png",
        date: "8 أبريل 2026"
    },
    {
        title: "كيف تضمن شركات المقاولات جودة تنفيذ المشاريع؟",
        desc: "الجودة في عالم المقاولات تبدأ من المختبر قبل الميدان، إن ضمان ديمومة الطريق...",
        img: "./Styles/Photos/two.avif",
        date: "5 أبريل 2026"
    },
    {
        title: "دور شركات المقاولات العامة في تطوير البنية التحتية",
        desc: "تعتبر شركات المقاولات العامة هي الذراع التنفيذي لخطط النهضة العمرانية في المملكة...",
        img: "./Styles/Photos/three.jpg",
        date: "1 أبريل 2026"
    }
];

const blogWrapper = document.getElementById('blog-container');
blogs.forEach(post => {
    blogWrapper.innerHTML += `
        <div class="col-lg-4 col-md-6">
            <div class="blog-card">
                <div class="blog-img" style="background-image: url('${post.img}')"></div>
                <div class="blog-body">
                    <small class="text-muted">${post.date}</small>
                    <h5 class="navy-text fw-bold my-2">${post.title}</h5>
                    <p class="small text-secondary">${post.desc}</p>
                </div>
            </div>
        </div>
    `;
});
// Blogs end /////////////////////////////////////////////////////
let button = document.querySelector(".btn-navy");
button.addEventListener("click", function(e){
    e.preventDefault(); // بيمنع الفورم إنها تعمل ريفرش للصفحة
    alert("  تم ارسال الرسالة بنجاح");
});