// Poetry content (Urdu only) and Quotes (English)
const poems = {
    'identity-crisis': {
        title: 'شناخت کا آئینہ',
        quote: 'Every action is a vote for the type of person you wish to become.',
        content: `ہر عمل ایک خاموش ووٹ ہے
اس شخص کے لیے جو ہم بننا چاہتے ہیں—
نہ وہ بڑے اشارے جو گونجتے ہیں
بلکہ وہ خاموش انتخاب جو جمع ہوتے ہیں
جیسے کونوں میں صبح کی روشنی۔

ہم اپنے آپ کے معمار ہیں،
سانس جتنی چھوٹی عادات سے تعمیر کرتے ہیں،
ہر فیصلہ ایک اینٹ ہے
کل کی ذات کی بنیاد میں۔

آئینہ جھوٹ نہیں بولتا:
یہ ہمیں نہیں دکھاتا کہ ہم کون ہیں،
بلکہ یہ کہ ہم کون بننے کا انتخاب کر رہے ہیں،
ایک وقت میں ایک لمحہ۔

کیا ہوگا اگر آج، ہم مختلف ووٹ ڈالیں؟
کیا ہوگا اگر یہ سانس، یہ انتخاب،
فیصلے کا یہ واحد لمحہ
وہ موڑ بن جائے
جہاں ہم اپنے آپ سے اجنبیوں کی طرح ملیں،
اور پسند کریں جو ہم نے پایا؟`
    },
    'atomic-wisdom': {
        title: 'چھوٹی حکمت',
        quote: 'You do not rise to the level of your goals; you fall to the level of your systems.',
        content: `بننے کی ریاضی میں،
ایک فیصد چھوٹا نہیں—
یہ روح کا سودی نفع ہے،
دنوں کا خاموش انقلاب۔

آپ کو کل تک مختلف شخص بننے کی ضرورت نہیں؛
آپ کو صرف ایک فیصد بہادر ہونے کی ضرورت ہے،
ایک فیصد مہربان،
ایک فیصد زیادہ خود۔

چھوٹی تبدیلیاں ماضی کا فن تعمیر توڑ دیتی ہیں:
سکرین کے بجائے کتاب،
فکر کے بجائے چہل قدمی،
ردعمل کے بجائے توقف۔

سالوں بعد، آپ کھڑے ہوں گے
اس کلیسا میں جو آپ بن گئے ہیں
اور حیران ہوں گے کہ کیسے سب سے چھوٹے پتھروں نے
سب سے اونچی دیواریں بنائیں۔

کائنات اضافوں میں سازش کرتی ہے،
ان لوگوں کو برکت دیتی ہے جو بھروسہ کرتے ہیں
چھوٹی حکمت کی طاقت پر—
کہ عظمت ان پیمائشوں میں بڑھتی ہے جو دیکھنے کے لیے بہت چھوٹی ہیں،
یہاں تک کہ اچانک، یہ آسمان کو بھر دیتی ہے۔`
    },
    'environment-poetry': {
        title: 'نادیدہ ہاتھ',
        quote: 'Environment is the invisible hand that shapes us while we sleep.',
        content: `ہم وہی ہیں جس سے اپنے آپ کو گھیرتے ہیں—
نہ صرف وہ دیواریں جو ہمیں تھامتی ہیں،
بلکہ ماحول کے لطیف معمار:
وہ کتابیں جو قطاروں سے دیکھتی ہیں،
وہ روشنی جو ہمارا مزاج طے کرتی ہے،
وہ خاموشی جو ہمارے خیالات کو شکل دیتی ہے۔

ماحول نادیدہ ہاتھ ہے
جو ہمیں سوتے وقت تراشتا ہے،
ہمارے لاشعور کو تجاویز دیتا ہے:
"یہ ہے جو تم ہو،
یہ ہے جو تم کرتے ہو،
یہ ہے جو یہاں اہم ہے۔"

تبدیل ہونا چاہتے ہو؟ اپنی جگہ تبدیل کرو۔
وہ کرسی ہٹاؤ جہاں تم سکرول کرتے ہو
وہاں جہاں تم خواب دیکھتے ہو۔
گٹار رکھو جہاں فون رہتا تھا۔
پانی کو یاد دلانے دو کہ زندگی کو گہرائی سے پیو۔

ہم سوچتے ہیں کہ ہم اپنی عادات کا انتخاب کرتے ہیں،
لیکن ہماری عادات پہلے اپنے گھر کا انتخاب کرتی ہیں—
اور ان گھروں میں، وہ ہمارا انتظار کرتی ہیں
صابر عاشقوں کی طرح
جو جانتے ہیں کہ ہم واپس آئیں گے
اس کے پاس جو ہم ہمیشہ تھے
جب تک کہ ہم اپنی روحوں کا فرنیچر نہ بدلیں۔`
    },
    'time-mortality': {
        title: 'وقت کی گونج',
        quote: 'This moment, this very moment, is all we truly own.',
        content: `وقت وہ کرنسی ہے جسے ہم خرچ کرتے ہیں
بیلنس جانے بغیر،
وہ قرض جو ہم ادا نہیں کر سکتے،
وہ تحفہ جسے ہم بہت آہستہ کھولتے ہیں۔

ہر صبح ایک قیامت ہے،
ہر رات ایک چھوٹی موت—
ان کے درمیان، ہم زندہ رہتے ہیں
دل کی دھڑکنوں کے درمیان جگہ میں،
سانسوں کے درمیان وقفے میں۔

جو چیز ہمیں مرتی روشنی کے خلاف غصہ دلاتی ہے
وہ موت خود نہیں ہے،
بلکہ نا جی گئی زندگی،
نہ کہے گئے الفاظ،
نہ دی گئی محبت،
اتنے دیر تک ملتوی کیے گئے خواب
کہ وہ اپنے نام بھول جاتے ہیں۔

پھر بھی فانی ہونا دشمن نہیں—
یہ وہ فریم ہے جو پینٹنگ کو معنی دیتا ہے،
وہ آخری تاریخ جو امکان کو فوری ضرورت میں بدل دیتی ہے،
وہ یاد دہانی کہ یہ لمحہ،
یہی لمحہ،
وہی سب ہے جس کے ہم واقعی مالک ہیں۔

آخر میں، ہماری پیمائش ہوتی ہے
ہمارے دنوں کی لمبائی سے نہیں،
بلکہ ہماری موجودگی کی گہرائی سے
ہر ناقابل تبدیل سیکنڈ میں
جو ہمیں دیا گیا ہے۔`
    },
    'connection-love': {
        title: 'حدود سے پار',
        quote: 'Love is not about losing ourselves in another, but finding ourselves reflected in eyes that see us clearly.',
        content: `محبت وہ نہیں جس کا شاعروں نے وعدہ کیا تھا—
یہ گلاب یا غروب کی سیر نہیں،
نہ بڑے اشارے اور نہ کامل الفاظ۔

محبت وہ طریقہ ہے جس سے تم سنتے ہو
میرے جملوں کے درمیان خاموشی کو،
کیسے تم میرے تضادات کے لیے جگہ بناتے ہو،
تمہاری آنکھوں میں صبر
جب میں اپنے ہی بھولبلیے میں کھو جاتا ہوں۔

یہ ماورائی اس لیے نہیں کہ یہ ہمیں اٹھاتی ہے
انسانی حالت سے اوپر،
بلکہ اس لیے کہ یہ ہمیں زیادہ انسان بناتی ہے—
زیادہ نرم، زیادہ بہادر،
زیادہ تیار دیکھے جانے کے لیے
اپنی تمام ٹوٹی عظمت میں۔

محبت میں، ہم دریافت کرتے ہیں کہ حدود
صرف تجاویز ہیں،
کہ دو دل دھڑک سکتے ہیں
کامل ہم آہنگی میں
مکمل طور پر خود رہتے ہوئے۔

محبت ہمیں سکھاتی ہے کہ رابطہ
اپنے آپ کو دوسرے میں کھونے کے بارے میں نہیں،
بلکہ اپنے آپ کو منعکس پانے کے بارے میں
ان آنکھوں میں جو ہمیں واضح طور پر دیکھتی ہیں
اور پھر بھی رہنے کا انتخاب کرتی ہیں۔

یہ وہ رشتہ ہے جو موجود ہے
جسمانی دائرے سے پار—
روح کا روح کو پہچاننا،
ذات کا ذات سے ملنا،
دلوں کی اس وسیع جمہوریت میں
جو کوئی سرحد نہیں جانتی۔`
    },
    'spiritual-journey': {
        title: 'ایمان کا قطب نما',
        quote: 'Faith is not the absence of doubt; it is wrestling with angels in the dark.',
        content: `ایمان شک کی عدم موجودگی نہیں—
یہ اندھیرے میں فرشتوں سے کشتی لڑنا ہے،
ہر چیز پر سوال اٹھانا
جبکہ کسی بڑی چیز پر یقین رکھنا
ہماری بے یقینیوں کے مجموعے سے۔

میں نے تیز دھار کی کنارے پر چلا ہے
عقیدت اور بغاوت کے درمیان،
خدا کو سوالوں میں پایا ہے
جتنا جوابوں میں،
دعاؤں کے درمیان خاموشی میں
جتنا ان کے کہنے میں۔

الہی ہماری کامل سمجھ کا مطالبہ نہیں کرتا،
صرف ہماری مخلصانہ شمولیت—
اس اسرار کے قریب جانے کی ہمت
کھلے ہاتھوں اور سچے دلوں کے ساتھ،
یہاں تک کہ جب راستہ غائب ہو جائے
دھند اور ایمان میں۔

کبھی میں یعقوب ہوں،
فجر تک کشتی لڑتا ہوں
ایک برکت کے لیے جسے میں نام نہیں دے سکتا۔
کبھی میں توما ہوں،
زخموں کو چھونے کی ضرورت
قیامت پر یقین کرنے کے لیے۔

لیکن ہمیشہ، میں انسان ہوں،
آسمان اور زمین کے
چوراہے پر کھڑا،
ایمان کو اپنے قطب نما کے طور پر استعمال کرتے ہوئے
روح کے جغرافیے کے
نشان زدہ علاقے سے گزرتے ہوئے،
یقین رکھتے ہوئے کہ اپنی آوارگی میں بھی،
مجھے گھر کی طرف لے جایا جا رہا ہے۔`
    }
};

// Language Management
let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ur' : 'en';
    
    // Update HTML direction
    document.documentElement.setAttribute('dir', currentLanguage === 'ur' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage === 'ur' ? 'ur' : 'en');
    
    // Show/hide language content
    const englishElements = document.querySelectorAll('.lang-en');
    const urduElements = document.querySelectorAll('.lang-ur');
    
    if (currentLanguage === 'ur') {
        englishElements.forEach(el => el.classList.add('hidden'));
        urduElements.forEach(el => el.classList.remove('hidden'));
    } else {
        englishElements.forEach(el => el.classList.remove('hidden'));
        urduElements.forEach(el => el.classList.add('hidden'));
    }
}

// Fade-in Animation Observer
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Modal Management
function openPoemModal(poemId) {
    const poem = poems[poemId];
    if (!poem) return;
    
    const modal = document.getElementById('poemModal');
    const titleElement = document.getElementById('poemTitle');
    const contentElement = document.getElementById('poemContent');
    
    // Clear previous content
    titleElement.innerHTML = '';
    contentElement.innerHTML = '';
    
    // Set Urdu title (poetry is Urdu only)
    titleElement.textContent = poem.title;
    
    // Create content container with English quote and Urdu poetry
    const quoteElement = document.createElement('div');
    quoteElement.className = 'poem-quote';
    quoteElement.innerHTML = `<em>"${poem.quote}"</em>`;
    
    const poemElement = document.createElement('div');
    poemElement.className = 'poem-text';
    poemElement.style.whiteSpace = 'pre-line';
    poemElement.textContent = poem.content;
    
    contentElement.appendChild(quoteElement);
    contentElement.appendChild(poemElement);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePoemModal() {
    const modal = document.getElementById('poemModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Smooth Scrolling
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}


// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Initialize animations
    initializeAnimations();
    
    
    // Modal close handlers
    const modal = document.getElementById('poemModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closePoemModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closePoemModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePoemModal();
        }
    });
    
    // Navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
    
    
    // Audio button placeholder functionality
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('audio-btn')) {
            alert(currentLanguage === 'en' ? 
                'Audio feature coming soon! Stay tuned for spoken word versions of these poems.' : 
                'آڈیو فیچر جلد آ رہا ہے! ان شاعری کے بولے گئے ورژن کے لیے منتظر رہیں۔');
        }
    });
    
    // Add subtle parallax effect to home section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const homeContent = document.querySelector('.home-content');
        if (homeContent) {
            homeContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });
});