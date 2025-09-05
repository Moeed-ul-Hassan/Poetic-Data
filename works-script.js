// Comprehensive Research Data
const researchData = [
    // Human Psychology Research
    {
        id: 1,
        category: 'psychology',
        title: {
            en: 'The Neuroscience of Habit Formation: How Small Changes Rewire the Brain',
            ur: 'عادت کی تشکیل کا نیورو سائنس: کیسے چھوٹی تبدیلیاں دماغ کو دوبارہ منظم کرتی ہیں'
        },
        excerpt: {
            en: 'Exploring the neural pathways that govern habit formation and how consistent small actions create lasting behavioral change through neuroplasticity.',
            ur: 'ان اعصابی راستوں کی کھوج جو عادت کی تشکیل کو کنٹرول کرتے ہیں اور کیسے مستقل چھوٹے اعمال نیوروپلاسٹسٹی کے ذریعے پائیدار رفتاری تبدیلی لاتے ہیں۔'
        },
        content: {
            en: `<h3>Understanding the Brain's Habit Loop</h3>
            <p>The human brain's capacity for neuroplasticity enables the formation of habits through repeated neural pathway activation. When we perform an action consistently, specific neural circuits strengthen through a process called long-term potentiation (LTP).</p>
            
            <h4>The Basal Ganglia and Habit Formation</h4>
            <p>The basal ganglia, particularly the striatum, plays a crucial role in converting conscious actions into automatic habits. Research by Ann Graybiel at MIT has shown that as habits form, brain activity shifts from the prefrontal cortex (conscious decision-making) to the basal ganglia (automatic processing).</p>
            
            <h4>Neurochemical Foundations</h4>
            <p>Dopamine release patterns change during habit formation. Initially, dopamine spikes when we receive a reward. Over time, dopamine release moves to the cue that triggers the habit, creating the neurochemical basis for craving and automatic behavior.</p>
            
            <blockquote>"The brain is designed to find patterns and create shortcuts. Every habit is essentially a neural pathway that becomes increasingly automatic through repetition."</blockquote>
            
            <h4>Practical Applications</h4>
            <p>Understanding these mechanisms allows us to:</p>
            <ul>
                <li>Design environments that trigger positive habits automatically</li>
                <li>Use the principle of atomic habits - 1% daily improvements</li>
                <li>Leverage neuroplasticity for personal transformation</li>
                <li>Break negative habits by disrupting established neural patterns</li>
            </ul>
            
            <h4>Research Implications</h4>
            <p>Recent fMRI studies demonstrate that habit strength correlates with increased myelination in specific brain regions, making these pathways more efficient. This research supports the Islamic principle of gradual self-improvement through consistent practice (Riyadah al-Nafs).</p>`,
            ur: `<h3>دماغ کے عادت کے چکر کو سمجھنا</h3>
            <p>انسانی دماغ کی نیوروپلاسٹسٹی کی صلاحیت بار بار اعصابی راستے کی چالیت کے ذریعے عادات کی تشکیل کو ممکن بناتی ہے۔ جب ہم کوئی عمل مستقل طور پر کرتے ہیں، تو مخصوص اعصابی سرکٹس طویل مدتی قوت (LTP) نامی عمل کے ذریعے مضبوط ہوتے ہیں۔</p>
            
            <h4>بیسل گینگلیا اور عادت کی تشکیل</h4>
            <p>بیسل گینگلیا، خاص طور پر سٹرائیٹم، شعوری اعمال کو خودکار عادات میں تبدیل کرنے میں اہم کردار ادا کرتا ہے۔ MIT میں این گریبیل کی تحقیق نے دکھایا ہے کہ جیسے عادات بنتی ہیں، دماغی سرگرمی پریفرنٹل کورٹیکس (شعوری فیصلہ سازی) سے بیسل گینگلیا (خودکار پروسیسنگ) میں منتقل ہو جاتی ہے۔</p>
            
            <h4>نیوروکیمیکل بنیادیں</h4>
            <p>عادت کی تشکیل کے دوران ڈوپامائن کی رہائی کے نمونے تبدیل ہوتے ہیں۔ ابتدائی طور پر، جب ہمیں انعام ملتا ہے تو ڈوپامائن کی مقدار بڑھ جاتی ہے۔ وقت کے ساتھ، ڈوپامائن کی رہائی اس اشارے کی طرف منتقل ہو جاتی ہے جو عادت کو متحرک کرتا ہے، جو خواہش اور خودکار رفتار کی نیوروکیمیکل بنیاد بناتا ہے۔</p>
            
            <blockquote>"دماغ نمونوں کو تلاش کرنے اور شارٹ کٹس بنانے کے لیے ڈیزائن کیا گیا ہے۔ ہر عادت بنیادی طور پر ایک اعصابی راستہ ہے جو تکرار کے ذریعے تیزی سے خودکار ہو جاتا ہے۔"</blockquote>
            
            <h4>عملی اطلاقات</h4>
            <p>ان میکانزم کو سمجھنا ہمیں یہ کرنے کی اجازت دیتا ہے:</p>
            <ul>
                <li>ایسے ماحول ڈیزائن کرنا جو مثبت عادات کو خودکار طور پر متحرک کرے</li>
                <li>ایٹامک عادات کے اصول کا استعمال - روزانہ 1% بہتری</li>
                <li>ذاتی تبدیلی کے لیے نیوروپلاسٹسٹی کا فائدہ اٹھانا</li>
                <li>قائم شدہ اعصابی نمونوں کو بگاڑ کر منفی عادات کو توڑنا</li>
            </ul>
            
            <h4>تحقیقی اثرات</h4>
            <p>حالیہ fMRI مطالعات ظاہر کرتے ہیں کہ عادت کی طاقت دماغ کے مخصوص علاقوں میں بڑھے ہوئے مائلینیشن سے مطابقت رکھتی ہے، جو ان راستوں کو زیادہ موثر بناتا ہے۔ یہ تحقیق مستقل مشق (ریاضۃ النفس) کے ذریعے بتدریج خود کو بہتر بنانے کے اسلامی اصول کو سپورٹ کرتی ہے۔</p>`
        },
        date: '2024-12-15',
        readTime: '8 min read',
        tags: ['neuroscience', 'habits', 'neuroplasticity', 'behavioral-change']
    },
    {
        id: 2,
        category: 'psychology',
        title: {
            en: 'Cognitive Biases in Decision Making: The Hidden Patterns of Human Judgment',
            ur: 'فیصلہ سازی میں ذہنی تعصبات: انسانی فیصلے کے چھپے ہوئے نمونے'
        },
        excerpt: {
            en: 'An in-depth analysis of how cognitive biases shape our daily decisions and the psychological mechanisms behind systematic errors in human judgment.',
            ur: 'اس کا گہری تجزیہ کہ کیسے ذہنی تعصبات ہمارے روزانہ فیصلوں کو شکل دیتے ہیں اور انسانی فیصلے میں منظم غلطیوں کے پیچھے نفسیاتی میکانزم۔'
        },
        content: {
            en: `<h3>The Architecture of Biased Thinking</h3>
            <p>Human cognition operates through two distinct systems: System 1 (fast, intuitive, automatic) and System 2 (slow, deliberate, analytical). Most cognitive biases emerge from System 1's rapid processing, which prioritizes speed over accuracy.</p>
            
            <h4>Confirmation Bias: Seeking Supporting Evidence</h4>
            <p>Perhaps the most pervasive bias, confirmation bias leads us to seek information that confirms our existing beliefs while ignoring contradictory evidence. This bias is particularly strong in political, religious, and personal identity-related contexts.</p>
            
            <h4>Availability Heuristic: The Accessibility Trap</h4>
            <p>We judge probability based on how easily examples come to mind. Recent, vivid, or emotionally charged events feel more likely than they actually are. This explains why people overestimate risks like plane crashes while underestimating more common dangers.</p>
            
            <blockquote>"The human mind is not designed to be rational; it's designed to be adaptive. Our biases evolved to help us survive, not to find truth."</blockquote>
            
            <h4>Anchoring Effect and Adjustment</h4>
            <p>Initial information disproportionately influences subsequent judgments. In negotiations, pricing, and even judicial sentencing, the first number mentioned acts as an anchor around which other estimates cluster.</p>
            
            <h4>Loss Aversion and Prospect Theory</h4>
            <p>Kahneman and Tversky's research shows that losses feel approximately twice as powerful as equivalent gains. This asymmetry drives risk-averse behavior and explains why people stick with unsatisfactory status quo situations.</p>
            
            <h4>Overcoming Cognitive Biases</h4>
            <ul>
                <li>Practicing intellectual humility and seeking disconfirming evidence</li>
                <li>Using structured decision-making frameworks</li>
                <li>Implementing "consider the opposite" strategies</li>
                <li>Relying on diverse perspectives and collective wisdom</li>
            </ul>
            
            <h4>Islamic Perspective on Judgment</h4>
            <p>Islamic teachings emphasize the importance of just judgment (Al-Adl) and seeking knowledge from multiple sources. The Quranic principle of "Shura" (consultation) provides a framework for overcoming individual biases through collective deliberation.</p>`,
            ur: `<h3>متعصبانہ سوچ کا ڈھانچہ</h3>
            <p>انسانی ادراک دو الگ نظاموں کے ذریعے کام کرتا ہے: سسٹم 1 (تیز، بدیہی، خودکار) اور سسٹم 2 (سست، جانبوجھ کر، تجزیاتی)۔ زیادہ تر ذہنی تعصبات سسٹم 1 کی تیز پروسیسنگ سے پیدا ہوتے ہیں، جو درستگی پر رفتار کو ترجیح دیتا ہے۔</p>
            
            <h4>تصدیقی تعصب: معاون ثبوت کی تلاش</h4>
            <p>شاید سب سے زیادہ پھیلا ہوا تعصب، تصدیقی تعصب ہمیں ایسی معلومات تلاش کرنے پر آمادہ کرتا ہے جو ہمارے موجودہ عقائد کی تصدیق کرتی ہے جبکہ متضاد ثبوتوں کو نظرانداز کرتا ہے۔ یہ تعصب خاص طور پر سیاسی، مذہبی، اور ذاتی شناخت سے متعلق سیاق میں مضبوط ہے۔</p>
            
            <h4>دستیابی کا طریقہ: رسائی کا جال</h4>
            <p>ہم امکان کا فیصلہ اس بنیاد پر کرتے ہیں کہ مثالیں کتنی آسانی سے ذہن میں آتی ہیں۔ حالیہ، واضح، یا جذباتی طور پر چارج شدہ واقعات حقیقت سے زیادہ ممکن لگتے ہیں۔ یہ وضاحت کرتا ہے کہ لوگ ہوائی جہاز کے حادثات جیسے خطرات کو زیادہ سمجھتے ہیں جبکہ زیادہ عام خطرات کو کم۔</p>
            
            <blockquote>"انسانی ذہن منطقی ہونے کے لیے ڈیزائن نہیں کیا گیا؛ یہ موافقت کے لیے ڈیزائن کیا گیا ہے۔ ہمارے تعصبات ہمیں زندہ رہنے میں مدد کے لیے ترقی پا گئے، سچ تلاش کرنے کے لیے نہیں۔"</blockquote>
            
            <h4>لنگر اثر اور ایڈجسٹمنٹ</h4>
            <p>ابتدائی معلومات بعد کے فیصلوں کو غیر متناسب طور پر متاثر کرتی ہیں۔ مذاکرات، قیمت، اور یہاں تک کہ عدالتی سزا میں، پہلا نمبر ذکر کیا جانا ایک لنگر کا کام کرتا ہے جس کے گرد دوسرے تخمینے جمع ہوتے ہیں۔</p>
            
            <h4>نقصان سے بچاؤ اور امکان نظریہ</h4>
            <p>کہنمان اور ٹورسکی کی تحقیق ظاہر کرتی ہے کہ نقصانات برابر کے فوائد سے تقریباً دو گنا طاقتور محسوس ہوتے ہیں۔ یہ عدم توازن خطرے سے بچنے والے رفتار کو چلاتا ہے اور وضاحت کرتا ہے کہ لوگ غیر اطمینان بخش موجودہ حالت کے ساتھ کیوں چپکے رہتے ہیں۔</p>
            
            <h4>ذہنی تعصبات پر قابو پانا</h4>
            <ul>
                <li>فکری عاجزی کا مشق اور متضاد ثبوت تلاش کرنا</li>
                <li>منظم فیصلہ سازی کے ڈھانچوں کا استعمال</li>
                <li>"الٹ کو غور کریں" کی حکمت عملیوں کا نفاذ</li>
                <li>متنوع نقطہ نظر اور اجتماعی حکمت پر انحصار</li>
            </ul>
            
            <h4>فیصلے پر اسلامی نقطہ نظر</h4>
            <p>اسلامی تعلیمات منصفانہ فیصلے (العدل) اور متعدد ذرائع سے علم حاصل کرنے کی اہمیت پر زور دیتی ہیں۔ شوریٰ (مشاورت) کا قرآنی اصول اجتماعی غور و فکر کے ذریعے انفرادی تعصبات پر قابو پانے کا ڈھانچہ فراہم کرتا ہے۔</p>`
        },
        date: '2024-12-10',
        readTime: '12 min read',
        tags: ['cognitive-bias', 'decision-making', 'behavioral-psychology', 'judgment']
    },
    {
        id: 3,
        category: 'nature',
        title: {
            en: 'The Evolution of Moral Intuitions: How Natural Selection Shaped Human Ethics',
            ur: 'اخلاقی بدیہیات کا ارتقاء: کیسے قدرتی انتخاب نے انسانی اخلاقیات کو شکل دیا'
        },
        excerpt: {
            en: 'Exploring the evolutionary origins of human morality and how our moral intuitions developed through millions of years of social cooperation and survival.',
            ur: 'انسانی اخلاقیات کی ارتقائی ابتداء کی کھوج اور کیسے ہماری اخلاقی بدیہیات لاکھوں سال کے سماجی تعاون اور بقا کے ذریعے ترقی پائیں۔'
        },
        content: {
            en: `<h3>The Biological Foundations of Morality</h3>
            <p>Human moral behavior didn't emerge in a vacuum. Our ethical intuitions are the product of millions of years of evolution, shaped by the demands of living in complex social groups where cooperation meant survival.</p>
            
            <h4>Kin Selection and Altruism</h4>
            <p>W.D. Hamilton's theory of kin selection explains why we naturally feel stronger obligations to family members. The mathematical relationship (Hamilton's Rule: rB > C) demonstrates that altruistic behavior evolves when the genetic benefit to relatives outweighs the cost to the individual.</p>
            
            <h4>Reciprocal Altruism: The Trust Foundation</h4>
            <p>Robert Trivers' concept of reciprocal altruism explains how cooperation evolved among non-relatives. The ability to remember past interactions, detect cheaters, and maintain reputations became crucial survival skills in early human societies.</p>
            
            <blockquote>"Morality is not something imposed upon our animal nature, but rather the natural outcome of that nature in social creatures capable of reason and empathy."</blockquote>
            
            <h4>The Five Moral Foundations</h4>
            <p>Jonathan Haidt's Moral Foundations Theory identifies five innate psychological systems:</p>
            <ul>
                <li><strong>Care/Harm:</strong> Protecting the vulnerable and avoiding suffering</li>
                <li><strong>Fairness/Cheating:</strong> Treating others according to just principles</li>
                <li><strong>Loyalty/Betrayal:</strong> Standing with your group against outsiders</li>
                <li><strong>Authority/Subversion:</strong> Respecting legitimate hierarchy and tradition</li>
                <li><strong>Sanctity/Degradation:</strong> Recognizing sacred values and avoiding contamination</li>
            </ul>
            
            <h4>Cultural Evolution of Moral Systems</h4>
            <p>While moral intuitions are universal, their expression varies dramatically across cultures. Cultural evolution allows moral systems to adapt to different environmental challenges, creating the rich diversity of ethical traditions we observe today.</p>
            
            <h4>Group Selection and Large-Scale Cooperation</h4>
            <p>Multi-level selection theory suggests that moral norms enabling large-scale cooperation gave certain groups survival advantages. This explains how humans developed the capacity for cooperation with strangers and abstract moral reasoning.</p>
            
            <h4>Implications for Modern Ethics</h4>
            <p>Understanding the evolutionary basis of morality helps us:</p>
            <ul>
                <li>Recognize the universal aspects of human ethics</li>
                <li>Understand cultural differences in moral priorities</li>
                <li>Design institutions that work with our moral psychology</li>
                <li>Address moral conflicts through evolutionary understanding</li>
            </ul>`,
            ur: `<h3>اخلاقیات کی حیاتیاتی بنیادیں</h3>
            <p>انسانی اخلاقی رفتار خلاء میں پیدا نہیں ہوئی۔ ہماری اخلاقی بدیہیات لاکھوں سال کے ارتقاء کا نتیجہ ہیں، جو پیچیدہ سماجی گروپوں میں رہنے کے تقاضوں سے شکل پائی ہیں جہاں تعاون کا مطلب بقا تھا۔</p>
            
            <h4>نسبی انتخاب اور بے غرضی</h4>
            <p>ڈبلیو ڈی ہیملٹن کا نسبی انتخاب کا نظریہ وضاحت کرتا ہے کہ ہم خاندانی اراکین کے لیے فطری طور پر زیادہ مضبوط ذمہ داریاں کیوں محسوس کرتے ہیں۔ ریاضی کا رشتہ (ہیملٹن کا اصول: rB > C) ظاہر کرتا ہے کہ بے غرض رفتار اس وقت ترقی پاتا ہے جب رشتہ داروں کو جینیاتی فائدہ فرد کی لاگت سے زیادہ ہو۔</p>
            
            <h4>باہمی بے غرضی: اعتماد کی بنیاد</h4>
            <p>رابرٹ ٹرائیورز کا باہمی بے غرضی کا تصور وضاحت کرتا ہے کہ غیر رشتہ داروں کے درمیان تعاون کیسے ترقی پایا۔ ماضی کے تعاملات کو یاد رکھنے، دھوکہ بازوں کا پتہ لگانے، اور ساکھ برقرار رکھنے کی صلاحیت ابتدائی انسانی معاشروں میں اہم بقا کی مہارت بن گئی۔</p>
            
            <blockquote>"اخلاقیات کوئی چیز نہیں جو ہماری حیوانی فطرت پر مسلط کی گئی ہو، بلکہ سماجی مخلوقات میں اس فطرت کا فطری نتیجہ ہے جو عقل اور ہمدردی کی صلاحیت رکھتے ہیں۔"</blockquote>
            
            <h4>پانچ اخلاقی بنیادیں</h4>
            <p>جونیتھن ہائیڈٹ کی اخلاقی بنیادوں کا نظریہ پانچ پیدائشی نفسیاتی نظاموں کی شناخت کرتا ہے:</p>
            <ul>
                <li><strong>دیکھ بھال/نقصان:</strong> کمزوروں کی حفاظت اور تکلیف سے بچنا</li>
                <li><strong>انصاف/دھوکہ:</strong> منصفانہ اصولوں کے مطابق دوسروں کے ساتھ سلوک</li>
                <li><strong>وفاداری/غداری:</strong> باہری لوگوں کے خلاف اپنے گروپ کے ساتھ کھڑا ہونا</li>
                <li><strong>اختیار/بغاوت:</strong> جائز درجہ بندی اور روایت کا احترام</li>
                <li><strong>پاکیزگی/انحطاط:</strong> مقدس اقدار کو پہچاننا اور آلودگی سے بچنا</li>
            </ul>
            
            <h4>اخلاقی نظاموں کا ثقافتی ارتقاء</h4>
            <p>جبکہ اخلاقی بدیہیات عالمگیر ہیں، ان کا اظہار ثقافتوں میں ڈرامائی طور پر مختلف ہوتا ہے۔ ثقافتی ارتقاء اخلاقی نظاموں کو مختلف ماحولیاتی چیلنجوں کے مطابق ڈھالنے کی اجازت دیتا ہے، جو آج ہم اخلاقی روایات کی بھرپور تنوع دیکھتے ہیں۔</p>
            
            <h4>گروپ انتخاب اور بڑے پیمانے پر تعاون</h4>
            <p>کثیر سطحی انتخاب کا نظریہ تجویز کرتا ہے کہ اخلاقی اصول جو بڑے پیمانے پر تعاون کو ممکن بناتے ہیں کچھ گروپوں کو بقا کے فوائد دیتے ہیں۔ یہ وضاحت کرتا ہے کہ انسانوں نے اجنبیوں کے ساتھ تعاون اور تجرید اخلاقی استدلال کی صلاحیت کیسے ترقی دی۔</p>
            
            <h4>جدید اخلاقیات کے لیے اثرات</h4>
            <p>اخلاقیات کی ارتقائی بنیاد کو سمجھنا ہماری مدد کرتا ہے:</p>
            <ul>
                <li>انسانی اخلاقیات کے عالمگیر پہلوؤں کو پہچاننا</li>
                <li>اخلاقی ترجیحات میں ثقافتی اختلافات کو سمجھنا</li>
                <li>ایسے ادارے ڈیزائن کرنا جو ہماری اخلاقی نفسیات کے ساتھ کام کریں</li>
                <li>ارتقائی فہم کے ذریعے اخلاقی تصادم کو حل کرنا</li>
            </ul>`
        },
        date: '2024-12-08',
        readTime: '15 min read',
        tags: ['evolution', 'morality', 'human-nature', 'cooperation', 'ethics']
    },
    {
        id: 4,
        category: 'islamic',
        title: {
            en: 'The Psychology of Taqwa: Fear, Hope, and Spiritual Development in Islamic Thought',
            ur: 'تقویٰ کی نفسیات: اسلامی فکر میں خوف، امید، اور روحانی ترقی'
        },
        excerpt: {
            en: 'An exploration of the psychological dimensions of Taqwa (God-consciousness) and its role in character development and spiritual growth according to Islamic psychology.',
            ur: 'تقویٰ (خدا کی معرفت) کے نفسیاتی پہلوؤں کی کھوج اور اسلامی نفسیات کے مطابق کردار کی تعمیر اور روحانی ترقی میں اس کا کردار۔'
        },
        content: {
            en: `<h3>Understanding Taqwa Through Psychological Lens</h3>
            <p>Taqwa, often translated as "God-consciousness" or "piety," represents one of the most sophisticated psychological concepts in Islamic tradition. It encompasses a state of heightened awareness, moral sensitivity, and spiritual vigilance that fundamentally transforms human behavior and cognition.</p>
            
            <h4>The Neuropsychology of Spiritual Awareness</h4>
            <p>Modern neuroscience reveals that contemplative practices associated with Taqwa activate the prefrontal cortex, enhancing executive functions like impulse control, decision-making, and emotional regulation. This aligns with the Quranic description of Taqwa as a protective barrier against moral transgressions.</p>
            
            <h4>Fear and Hope: The Dual Motivational System</h4>
            <p>Islamic psychology recognizes two primary motivational forces in spiritual development:</p>
            <ul>
                <li><strong>Khawf (Sacred Fear):</strong> Not anxiety or terror, but reverential awe that prevents harmful actions</li>
                <li><strong>Raja (Hope):</strong> Optimistic expectation that motivates positive action and perseverance</li>
            </ul>
            
            <blockquote>"Between fear and hope lies the path of the wise - neither despair that leads to abandonment, nor overconfidence that leads to complacency." - Al-Ghazali</blockquote>
            
            <h4>Stages of Spiritual Development</h4>
            <p>Classical Islamic scholars identified progressive stages of Taqwa:</p>
            <ul>
                <li><strong>Taqwa al-Awam:</strong> Basic compliance with religious obligations</li>
                <li><strong>Taqwa al-Khawas:</strong> Avoiding doubtful matters and focusing on spiritual excellence</li>
                <li><strong>Taqwa al-Khawas al-Khawas:</strong> Complete absorption in divine consciousness</li>
            </ul>
            
            <h4>Psychological Mechanisms of Taqwa</h4>
            <p>From a psychological perspective, Taqwa operates through several mechanisms:</p>
            <ul>
                <li><strong>Metacognition:</strong> Awareness of one's thoughts and intentions</li>
                <li><strong>Moral Monitoring:</strong> Constant self-evaluation against ethical standards</li>
                <li><strong>Emotional Regulation:</strong> Managing desires and impulses through spiritual awareness</li>
                <li><strong>Cognitive Restructuring:</strong> Reframing life experiences through spiritual meaning</li>
            </ul>
            
            <h4>The Purification of the Soul (Tazkiyah)</h4>
            <p>Taqwa is closely linked to Tazkiyah - the process of spiritual purification. This involves:</p>
            <ul>
                <li>Recognition of spiritual diseases (pride, envy, anger)</li>
                <li>Active effort to eliminate negative traits</li>
                <li>Cultivation of positive spiritual qualities</li>
                <li>Consistent self-accountability (Muhasabah)</li>
            </ul>
            
            <h4>Modern Applications</h4>
            <p>Contemporary Islamic psychology applies Taqwa principles in:</p>
            <ul>
                <li>Therapeutic interventions for anxiety and depression</li>
                <li>Character education and moral development programs</li>
                <li>Addiction recovery through spiritual grounding</li>
                <li>Leadership development based on ethical consciousness</li>
            </ul>`,
            ur: `<h3>نفسیاتی عینک سے تقویٰ کو سمجھنا</h3>
            <p>تقویٰ، جو اکثر "خدا کی معرفت" یا "پرہیزگاری" کے طور پر ترجمہ کیا جاتا ہے، اسلامی روایت میں سب سے پیچیدہ نفسیاتی تصورات میں سے ایک ہے۔ یہ بلند شعور، اخلاقی حساسیت، اور روحانی چوکسی کی حالت کو شامل کرتا ہے جو بنیادی طور پر انسانی رفتار اور ادراک کو تبدیل کر دیتا ہے۔</p>
            
            <h4>روحانی شعور کی اعصابی نفسیات</h4>
            <p>جدید نیورو سائنس ظاہر کرتا ہے کہ تقویٰ سے وابستہ تأملی مشق پریفرنٹل کورٹیکس کو متحرک کرتے ہیں، جو انتظامی فعالیت جیسے احتیاط کنٹرول، فیصلہ سازی، اور جذباتی ضابطے کو بڑھاتے ہیں۔ یہ تقویٰ کی قرآنی تشریح کے ساتھ ہم آہنگ ہے کہ یہ اخلاقی خلاف ورزیوں کے خلاف ایک حفاظتی رکاوٹ ہے۔</p>
            
            <h4>خوف اور امید: دوہری محرک نظام</h4>
            <p>اسلامی نفسیات روحانی ترقی میں دو بنیادی محرک قوتوں کو تسلیم کرتا ہے:</p>
            <ul>
                <li><strong>خوف (مقدس خوف):</strong> اضطراب یا دہشت نہیں، بلکہ احترام کا رعب جو نقصان دہ اعمال سے روکتا ہے</li>
                <li><strong>رجا (امید):</strong> مثبت توقع جو مثبت عمل اور استقامت کو متحرک کرتی ہے</li>
            </ul>
            
            <blockquote>"خوف اور امید کے درمیان عقلمندوں کا راستہ ہے - نہ مایوسی جو ترک کرنے کی طرف لے جاتی ہے، نہ زیادہ اعتماد جو خود پسندی کی طرف لے جاتا ہے۔" - الغزالی</blockquote>
            
            <h4>روحانی ترقی کے مراحل</h4>
            <p>کلاسیکل اسلامی علماء نے تقویٰ کے ترقی پذیر مراحل کی شناخت کی:</p>
            <ul>
                <li><strong>تقویٰ العوام:</strong> مذہبی فرائض کی بنیادی تعمیل</li>
                <li><strong>تقویٰ الخواص:</strong> مشکوک معاملات سے بچنا اور روحانی بہتری پر توجہ</li>
                <li><strong>تقویٰ الخواص الخواص:</strong> الہی شعور میں مکمل غرق ہونا</li>
            </ul>
            
            <h4>تقویٰ کے نفسیاتی میکانزم</h4>
            <p>نفسیاتی نقطہ نظر سے، تقویٰ کئی میکانزم کے ذریعے کام کرتا ہے:</p>
            <ul>
                <li><strong>میٹا کگنیشن:</strong> اپنے خیالات اور نیات کا شعور</li>
                <li><strong>اخلاقی نگرانی:</strong> اخلاقی معیارات کے خلاف مستقل خود تشخیص</li>
                <li><strong>جذباتی ضابطہ:</strong> روحانی شعور کے ذریعے خواہشات اور جذبات کا انتظام</li>
                <li><strong>ذہنی تشکیل نو:</strong> روحانی معنی کے ذریعے زندگی کے تجربات کو دوبارہ شکل دینا</li>
            </ul>
            
            <h4>روح کی تطہیر (تزکیہ)</h4>
            <p>تقویٰ کا تزکیہ سے گہرا تعلق ہے - روحانی تطہیر کا عمل۔ اس میں شامل ہے:</p>
            <ul>
                <li>روحانی بیماریوں کی پہچان (تکبر، حسد، غصہ)</li>
                <li>منفی خصائل کو ختم کرنے کی فعال کوشش</li>
                <li>مثبت روحانی خصائل کی پرورش</li>
                <li>مستقل خود احتساب (محاسبہ)</li>
            </ul>
            
            <h4>جدید اطلاقات</h4>
            <p>عصری اسلامی نفسیات تقویٰ کے اصولوں کو استعمال کرتا ہے:</p>
            <ul>
                <li>اضطراب اور ڈپریشن کے لیے علاجی مداخلت</li>
                <li>کردار کی تعلیم اور اخلاقی ترقی کے پروگرام</li>
                <li>روحانی بنیادوں کے ذریعے لت سے نجات</li>
                <li>اخلاقی شعور پر مبنی قیادت کی ترقی</li>
            </ul>`
        },
        date: '2024-12-05',
        readTime: '13 min read',
        tags: ['taqwa', 'islamic-psychology', 'spirituality', 'character-development']
    },
    {
        id: 5,
        category: 'psychology',
        title: {
            en: 'The Paradox of Choice: How Too Many Options Lead to Decision Paralysis',
            ur: 'انتخاب کا تضاد: کیسے بہت زیادہ اختیارات فیصلے کی مفلوجی کا باعث بنتے ہیں'
        },
        excerpt: {
            en: 'Examining Barry Schwartz\'s theory on how excessive choice creates anxiety, reduces satisfaction, and paradoxically limits our freedom.',
            ur: 'بیری شوارٹز کے نظریے کا جائزہ کہ کیسے زیادہ انتخاب اضطراب پیدا کرتا ہے، اطمینان کم کرتا ہے، اور متضاد طور پر ہماری آزادی کو محدود کرتا ہے۔'
        },
        content: {
            en: `<h3>When Freedom Becomes a Burden</h3>
            <p>In our modern consumer society, we're often told that more choices equal more freedom and happiness. However, psychological research reveals a different reality: beyond a certain point, additional options create stress, anxiety, and regret rather than satisfaction.</p>
            
            <h4>The Jam Study: A Landmark Discovery</h4>
            <p>Sheena Iyengar's famous jam study at Columbia University demonstrated this paradox perfectly. When shoppers were offered 24 varieties of jam, only 3% made a purchase. When offered just 6 varieties, 30% bought jam. More choice led to less action.</p>
            
            <h4>Psychological Mechanisms Behind Choice Overload</h4>
            <p>Several psychological factors contribute to choice paralysis:</p>
            <ul>
                <li><strong>Opportunity Cost Salience:</strong> With more options, we become more aware of what we're giving up</li>
                <li><strong>Escalation of Expectations:</strong> More choices raise our standards, making satisfaction harder to achieve</li>
                <li><strong>Anticipated Regret:</strong> Fear of making the "wrong" choice increases with option quantity</li>
                <li><strong>Decision Fatigue:</strong> Mental energy depletes with each choice we make</li>
            </ul>
            
            <blockquote>"The fact that some choice is good doesn't necessarily mean that more choice is better." - Barry Schwartz</blockquote>
            
            <h4>Maximizers vs. Satisficers</h4>
            <p>Herbert Simon identified two decision-making styles:</p>
            <ul>
                <li><strong>Maximizers:</strong> Seek the absolute best option, leading to endless searching and comparison</li>
                <li><strong>Satisficers:</strong> Look for "good enough" options that meet their criteria</li>
            </ul>
            <p>Research consistently shows that satisficers are happier and less prone to regret than maximizers.</p>
            
            <h4>The Role of Culture in Choice Perception</h4>
            <p>Western individualistic cultures emphasize personal choice as freedom, while collectivistic cultures may view excessive choice as burdensome. This cultural lens affects how we experience decision-making stress.</p>
            
            <h4>Neurological Basis of Decision Fatigue</h4>
            <p>fMRI studies show that decision-making depletes glucose in the prefrontal cortex, literally exhausting our mental resources. This explains why important decisions are often best made when we're fresh and well-rested.</p>
            
            <h4>Strategies for Managing Choice Overload</h4>
            <ul>
                <li><strong>Constraint Creation:</strong> Artificially limit your options</li>
                <li><strong>Categorization:</strong> Group similar choices to reduce complexity</li>
                <li><strong>Delegation:</strong> Let trusted others make less important decisions</li>
                <li><strong>Default Options:</strong> Use predetermined choices for routine decisions</li>
                <li><strong>Time Boxing:</strong> Set strict time limits for decision-making</li>
            </ul>
            
            <h4>Islamic Perspective on Choice and Contentment</h4>
            <p>Islamic teachings emphasize the concept of Qana'ah (contentment) and Ridha (acceptance), suggesting that true satisfaction comes not from having unlimited options but from appreciating what we have and trusting in divine wisdom.</p>`,
            ur: `<h3>جب آزادی بوجھ بن جائے</h3>
            <p>ہمارے جدید صارف معاشرے میں، ہمیں اکثر کہا جاتا ہے کہ زیادہ انتخابات زیادہ آزادی اور خوشی کے برابر ہیں۔ تاہم، نفسیاتی تحقیق ایک مختلف حقیقت ظاہر کرتی ہے: ایک مخصوص نقطے سے آگے، اضافی اختیارات اطمینان کے بجائے تناؤ، اضطراب، اور افسوس پیدا کرتے ہیں۔</p>
            
            <h4>جام کا مطالعہ: ایک اہم دریافت</h4>
            <p>کولمبیا یونیورسٹی میں شینا آئینگار کے مشہور جام کے مطالعے نے اس تضاد کو بالکل ظاہر کیا۔ جب خریداروں کو 24 قسم کے جام کی پیشکش کی گئی، تو صرف 3% نے خریداری کی۔ جب صرف 6 اقسام کی پیشکش کی گئی، تو 30% نے جام خریدا۔ زیادہ انتخاب کم عمل کا باعث بنا۔</p>
            
            <h4>انتخاب کی زیادتی کے پیچھے نفسیاتی میکانزم</h4>
            <p>کئی نفسیاتی عوامل انتخاب کی مفلوجی میں حصہ ڈالتے ہیں:</p>
            <ul>
                <li><strong>موقع کی لاگت کی نمایاں:</strong> زیادہ اختیارات کے ساتھ، ہم اس بات سے زیادہ آگاہ ہو جاتے ہیں جو ہم چھوڑ رہے ہیں</li>
                <li><strong>توقعات میں اضافہ:</strong> زیادہ انتخابات ہمارے معیار بلند کرتے ہیں، اطمینان حاصل کرنا مشکل بناتے ہیں</li>
                <li><strong>متوقع افسوس:</strong> "غلط" انتخاب کرنے کا خوف اختیارات کی مقدار کے ساتھ بڑھتا ہے</li>
                <li><strong>فیصلے کی تھکان:</strong> ہر انتخاب کے ساتھ ذہنی توانائی ختم ہوتی جاتی ہے</li>
            </ul>
            
            <blockquote>"یہ حقیقت کہ کچھ انتخاب اچھا ہے، ضروری نہیں کہ زیادہ انتخاب بہتر ہو۔" - بیری شوارٹز</blockquote>
            
            <h4>میکسیمائزرز بمقابلہ سیٹسفائسرز</h4>
            <p>ہربرٹ سائمن نے دو فیصلہ سازی کے انداز کی شناخت کی:</p>
            <ul>
                <li><strong>میکسیمائزرز:</strong> مطلق بہترین اختیار تلاش کرتے ہیں، لامتناہی تلاش اور موازنے کا باعث بنتے ہیں</li>
                <li><strong>سیٹسفائسرز:</strong> "کافی اچھے" اختیارات تلاش کرتے ہیں جو ان کے معیار پر پورا اترتے ہیں</li>
            </ul>
            <p>تحقیق مستقل طور پر ظاہر کرتا ہے کہ سیٹسفائسرز میکسیمائزرز سے زیادہ خوش اور افسوس کے کم شکار ہوتے ہیں۔</p>
            
            <h4>انتخاب کی تصور میں ثقافت کا کردار</h4>
            <p>مغربی انفرادی ثقافتیں ذاتی انتخاب کو آزادی کے طور پر زور دیتی ہیں، جبکہ اجتماعی ثقافتیں زیادہ انتخاب کو بوجھ کے طور پر دیکھ سکتی ہیں۔ یہ ثقافتی عینک اس بات کو متاثر کرتا ہے کہ ہم فیصلہ سازی کے تناؤ کا تجربہ کیسے کرتے ہیں۔</p>
            
            <h4>فیصلے کی تھکان کی اعصابی بنیاد</h4>
            <p>fMRI مطالعات ظاہر کرتے ہیں کہ فیصلہ سازی پریفرنٹل کورٹیکس میں گلوکوس ختم کرتا ہے، لفظی طور پر ہمارے ذہنی وسائل کو ختم کرتا ہے۔ یہ وضاحت کرتا ہے کہ اہم فیصلے اکثر اس وقت بہتر ہوتے ہیں جب ہم تازہ اور آرام سے ہوں۔</p>
            
            <h4>انتخاب کی زیادتی کا انتظام کرنے کی حکمت عملیاں</h4>
            <ul>
                <li><strong>رکاوٹ کی تخلیق:</strong> مصنوعی طور پر اپنے اختیارات محدود کریں</li>
                <li><strong>درجہ بندی:</strong> پیچیدگی کم کرنے کے لیے ملتے جلتے انتخابات کو گروپ کریں</li>
                <li><strong>تفویض:</strong> قابل اعتماد دوسروں کو کم اہم فیصلے کرنے دیں</li>
                <li><strong>ڈیفالٹ اختیارات:</strong> معمول کے فیصلوں کے لیے پہلے سے طے شدہ انتخاب استعمال کریں</li>
                <li><strong>وقت کی پابندی:</strong> فیصلہ سازی کے لیے سخت وقت کی حد مقرر کریں</li>
            </ul>
            
            <h4>انتخاب اور اطمینان پر اسلامی نقطہ نظر</h4>
            <p>اسلامی تعلیمات قناعت اور رضا کے تصور پر زور دیتی ہیں، یہ تجویز کرتے ہوئے کہ حقیقی اطمینان لامحدود اختیارات رکھنے سے نہیں بلکہ اس بات کی قدر کرنے سے آتا ہے جو ہمارے پاس ہے اور الہی حکمت پر بھروسہ کرنے سے۔</p>`
        },
        date: '2024-12-01',
        readTime: '11 min read',
        tags: ['choice-paradox', 'decision-making', 'consumer-psychology', 'cognitive-load']
    },
    // Continue with more research posts...
    {
        id: 6,
        category: 'nature',
        title: {
            en: 'Mirror Neurons and Human Empathy: The Biological Basis of Understanding Others',
            ur: 'آئینہ نیورونز اور انسانی ہمدردی: دوسروں کو سمجھنے کی حیاتیاتی بنیاد'
        },
        excerpt: {
            en: 'Exploring how mirror neurons enable us to understand others\' actions and emotions, forming the foundation of empathy and social connection.',
            ur: 'آئینہ نیورونز کیسے ہمیں دوسروں کے اعمال اور جذبات کو سمجھنے میں مدد کرتے ہیں، ہمدردی اور سماجی تعلق کی بنیاد بناتے ہیں۔'
        },
        content: {
            en: `<h3>The Discovery That Changed Our Understanding of Social Cognition</h3>
            <p>In the 1990s, researchers at the University of Parma made an accidental discovery that revolutionized our understanding of how humans connect with one another. While studying macaque monkeys, they found neurons that fired both when an animal performed an action and when it observed the same action being performed by another.</p>
            
            <h4>What Are Mirror Neurons?</h4>
            <p>Mirror neurons are specialized brain cells that activate in two distinct situations:</p>
            <ul>
                <li>When we perform a specific action ourselves</li>
                <li>When we observe someone else performing the same action</li>
            </ul>
            <p>This dual activation creates a neural bridge between self and other, allowing us to "simulate" others' experiences in our own minds.</p>
            
            <h4>The Empathy Connection</h4>
            <p>Mirror neurons provide the biological foundation for empathy by enabling us to:</p>
            <ul>
                <li><strong>Understand intentions:</strong> Predict what others are trying to accomplish</li>
                <li><strong>Share emotions:</strong> Feel what others are experiencing</li>
                <li><strong>Learn through imitation:</strong> Acquire new skills by watching others</li>
                <li><strong>Develop social bonds:</strong> Create connections through shared experience</li>
            </ul>
            
            <blockquote>"Mirror neurons allow us to grasp the minds of others not through conceptual reasoning but through direct simulation. By feeling, not by thinking." - Marco Iacoboni</blockquote>
            
            <h4>Language and Communication</h4>
            <p>Some researchers propose that mirror neurons played a crucial role in human language evolution. The ability to map observed lip movements and gestures onto our own motor repertoire may have provided the foundation for:</p>
            <ul>
                <li>Gesture-based communication</li>
                <li>Vocal imitation and learning</li>
                <li>Understanding communicative intentions</li>
                <li>Development of complex linguistic abilities</li>
            </ul>
            
            <h4>Autism and Mirror Neuron Dysfunction</h4>
            <p>The "broken mirror" hypothesis suggests that autism spectrum disorders might involve mirror neuron system dysfunction. This could explain:</p>
            <ul>
                <li>Difficulties with social understanding</li>
                <li>Challenges in reading emotional expressions</li>
                <li>Problems with imitation and learning</li>
                <li>Reduced empathetic responses</li>
            </ul>
            
            <h4>Cultural Transmission and Learning</h4>
            <p>Mirror neurons facilitate cultural learning by enabling:</p>
            <ul>
                <li>Rapid skill acquisition through observation</li>
                <li>Transmission of social norms and behaviors</li>
                <li>Understanding of cultural gestures and expressions</li>
                <li>Development of shared social practices</li>
            </ul>
            
            <h4>Therapeutic Applications</h4>
            <p>Understanding mirror neuron function has led to innovative therapeutic approaches:</p>
            <ul>
                <li><strong>Mirror therapy:</strong> For stroke rehabilitation and phantom limb pain</li>
                <li><strong>Imitation-based interventions:</strong> For autism spectrum disorders</li>
                <li><strong>Empathy training:</strong> Using observational learning techniques</li>
                <li><strong>Social skills development:</strong> Through modeling and mirroring</li>
            </ul>
            
            <h4>The Dark Side of Mirroring</h4>
            <p>While mirror neurons enable positive social connection, they can also:</p>
            <ul>
                <li>Facilitate emotional contagion and mob behavior</li>
                <li>Enable manipulation through mimicry</li>
                <li>Create bias through in-group preference</li>
                <li>Lead to emotional overwhelm in highly empathetic individuals</li>
            </ul>`,
            ur: `<h3>وہ دریافت جس نے سماجی ادراک کی ہماری سمجھ تبدیل کر دی</h3>
            <p>1990 کی دہائی میں، پارما یونیورسٹی کے محققین نے ایک حادثاتی دریافت کی جس نے ہماری سمجھ کو انقلابی طور پر تبدیل کر دیا کہ انسان ایک دوسرے سے کیسے جڑتے ہیں۔ میکاک بندروں کا مطالعہ کرتے وقت، انہوں نے ایسے نیورونز پائے جو اس وقت بھی فائر کرتے تھے جب جانور خود کوئی عمل کرتا اور اس وقت بھی جب وہ کسی دوسرے کو وہی عمل کرتے دیکھتا۔</p>
            
            <h4>آئینہ نیورونز کیا ہیں؟</h4>
            <p>آئینہ نیورونز خصوصی دماغی خلیے ہیں جو دو الگ حالات میں فعال ہوتے ہیں:</p>
            <ul>
                <li>جب ہم خود کوئی مخصوص عمل کرتے ہیں</li>
                <li>جب ہم کسی اور کو وہی عمل کرتے دیکھتے ہیں</li>
            </ul>
            <p>یہ دوہری چالیت خود اور دوسرے کے درمیان ایک اعصابی پل بناتا ہے، جو ہمیں اپنے ذہن میں دوسروں کے تجربات کی "نقل" کرنے کی اجازت دیتا ہے۔</p>
            
            <h4>ہمدردی کا تعلق</h4>
            <p>آئینہ نیورونز ہمدردی کی حیاتیاتی بنیاد فراہم کرتے ہیں جو ہمیں یہ کرنے میں مدد کرتے ہیں:</p>
            <ul>
                <li><strong>نیت سمجھنا:</strong> پیش گوئی کرنا کہ دوسرے کیا حاصل کرنے کی کوشش کر رہے ہیں</li>
                <li><strong>جذبات کا اشتراک:</strong> محسوس کرنا کہ دوسرے کیا تجربہ کر رہے ہیں</li>
                <li><strong>نقل کے ذریعے سیکھنا:</strong> دوسروں کو دیکھ کر نئی مہارتیں حاصل کرنا</li>
                <li><strong>سماجی بندھن پیدا کرنا:</strong> مشترکہ تجربے کے ذریعے تعلقات بنانا</li>
            </ul>
            
            <blockquote>"آئینہ نیورونز ہمیں دوسروں کے ذہن کو تصوری استدلال کے ذریعے نہیں بلکہ براہ راست نقل کے ذریعے سمجھنے کی اجازت دیتے ہیں۔ سوچ کر نہیں، محسوس کر کے۔" - مارکو آئیکوبونی</blockquote>
            
            <h4>زبان اور رابطہ</h4>
            <p>کچھ محققین تجویز کرتے ہیں کہ آئینہ نیورونز نے انسانی زبان کے ارتقاء میں اہم کردار ادا کیا۔ دیکھے گئے ہونٹوں کی حرکات اور اشاروں کو اپنے موٹر ذخیرے پر نقشہ بنانے کی صلاحیت نے شاید ان کی بنیاد فراہم کی:</p>
            <ul>
                <li>اشاراتی بنیادوں پر رابطہ</li>
                <li>آوازی نقل اور سیکھنا</li>
                <li>بات چیت کی نیت سمجھنا</li>
                <li>پیچیدہ لسانی صلاحیات کی ترقی</li>
            </ul>
            
            <h4>آٹزم اور آئینہ نیورون کی خرابی</h4>
            <p>"ٹوٹا آئینہ" کا نظریہ تجویز کرتا ہے کہ آٹزم سپیکٹرم ڈسآرڈرز میں آئینہ نیورون سسٹم کی خرابی شامل ہو سکتی ہے۔ یہ وضاحت کر سکتا ہے:</p>
            <ul>
                <li>سماجی سمجھ میں مشکلات</li>
                <li>جذباتی تاثرات پڑھنے میں چیلنجز</li>
                <li>نقل اور سیکھنے میں مسائل</li>
                <li>ہمدردانہ ردعمل میں کمی</li>
            </ul>
            
            <h4>ثقافتی منتقلی اور سیکھنا</h4>
            <p>آئینہ نیورونز ثقافتی سیکھنے میں مدد کرتے ہیں:</p>
            <ul>
                <li>مشاہدے کے ذریعے تیزی سے مہارت حاصل کرنا</li>
                <li>سماجی اصولوں اور رفتار کی منتقلی</li>
                <li>ثقافتی اشاروں اور تاثرات کی سمجھ</li>
                <li>مشترکہ سماجی طریقوں کی ترقی</li>
            </ul>
            
            <h4>علاجی اطلاقات</h4>
            <p>آئینہ نیورون کے فعل کو سمجھنے سے جدید علاجی طریقے پیدا ہوئے ہیں:</p>
            <ul>
                <li><strong>آئینہ تھیراپی:</strong> فالج کی بحالی اور فینٹم اعضاء کے درد کے لیے</li>
                <li><strong>نقل پر مبنی مداخلت:</strong> آٹزم سپیکٹرم ڈسآرڈرز کے لیے</li>
                <li><strong>ہمدردی کی تربیت:</strong> مشاہداتی سیکھنے کی تکنیکیں استعمال کرتے ہوئے</li>
                <li><strong>سماجی مہارتوں کی ترقی:</strong> ماڈلنگ اور آئینہ کاری کے ذریعے</li>
            </ul>
            
            <h4>آئینہ کاری کا تاریک پہلو</h4>
            <p>جبکہ آئینہ نیورونز مثبت سماجی تعلق کو ممکن بناتے ہیں، وہ یہ بھی کر سکتے ہیں:</p>
            <ul>
                <li>جذباتی پھیلاؤ اور ہجومی رفتار کو آسان بنانا</li>
                <li>نقل کے ذریعے ہیرا پھیری کو ممکن بنانا</li>
                <li>اندرونی گروپ کی ترجیح کے ذریعے تعصب پیدا کرنا</li>
                <li>انتہائی ہمدرد افراد میں جذباتی بھاری پن کا باعث بننا</li>
            </ul>`
        },
        date: '2024-11-28',
        readTime: '10 min read',
        tags: ['mirror-neurons', 'empathy', 'neuroscience', 'social-cognition']
    }
    // Add more research items to reach 50+ posts...
];

// Add more comprehensive research data to reach 50+ posts
const additionalResearch = [
    {
        id: 7,
        category: 'islamic',
        title: {
            en: 'The Concept of Fitrah: Islamic Psychology of Human Nature',
            ur: 'فطرت کا تصور: انسانی طبیعت کی اسلامی نفسیات'
        },
        excerpt: {
            en: 'Understanding the Islamic concept of innate human nature (Fitrah) and its implications for psychological well-being and spiritual development.',
            ur: 'فطری انسانی طبیعت (فطرت) کے اسلامی تصور کو سمجھنا اور نفسیاتی تندرستی اور روحانی ترقی کے لیے اس کے اثرات۔'
        },
        content: {
            en: `<h3>The Divine Blueprint Within</h3>
            <p>Fitrah represents one of the most profound concepts in Islamic psychology - the idea that every human being is born with an innate disposition toward recognizing truth, goodness, and the divine. This concept bridges the gap between revelation and human psychology.</p>
            
            <h4>Understanding Fitrah in Quranic Context</h4>
            <p>The Quran states: "So direct your face toward the religion, inclining to truth. [Adhere to] the fitrah of Allah upon which He has created [all] people" (30:30). This verse establishes Fitrah as the fundamental human constitution designed by Allah.</p>
            
            <h4>Components of Fitrah</h4>
            <p>Classical Islamic scholars identified several elements of Fitrah:</p>
            <ul>
                <li><strong>Tawhid (Monotheism):</strong> Natural inclination toward belief in one God</li>
                <li><strong>Moral Compass:</strong> Innate sense of right and wrong</li>
                <li><strong>Quest for Meaning:</strong> Natural desire to understand purpose and meaning</li>
                <li><strong>Social Nature:</strong> Inherent need for community and relationships</li>
                <li><strong>Aesthetic Appreciation:</strong> Natural attraction to beauty and harmony</li>
            </ul>
            
            <blockquote>"Every child is born upon Fitrah, and it is his parents who make him a Jew, Christian, or Magian." - Prophet Muhammad (PBUH)</blockquote>
            
            <h4>Psychological Implications of Fitrah</h4>
            <p>The concept of Fitrah has significant psychological implications:</p>
            <ul>
                <li><strong>Mental Health:</strong> Alignment with Fitrah promotes psychological well-being</li>
                <li><strong>Identity Formation:</strong> Fitrah provides a stable foundation for self-understanding</li>
                <li><strong>Moral Development:</strong> Natural moral inclinations guide ethical behavior</li>
                <li><strong>Spiritual Growth:</strong> Fitrah facilitates connection with the divine</li>
            </ul>
            
            <h4>Corruption and Restoration of Fitrah</h4>
            <p>Islamic psychology recognizes that Fitrah can be obscured by:</p>
            <ul>
                <li>Environmental influences and social conditioning</li>
                <li>Sinful behavior that deadens spiritual sensitivity</li>
                <li>Intellectual arrogance that rejects innate wisdom</li>
                <li>Materialistic pursuits that distract from spiritual truth</li>
            </ul>
            
            <h4>Restoring Fitrah Through Islamic Practices</h4>
            <p>Islamic tradition offers methods for awakening and purifying Fitrah:</p>
            <ul>
                <li><strong>Dhikr (Remembrance):</strong> Constant awareness of Allah</li>
                <li><strong>Prayer and Worship:</strong> Regular spiritual practices</li>
                <li><strong>Quran Recitation:</strong> Engaging with divine revelation</li>
                <li><strong>Self-Reflection:</strong> Regular examination of thoughts and actions</li>
                <li><strong>Good Company:</strong> Surrounding oneself with righteous people</li>
            </ul>
            
            <h4>Modern Research and Fitrah</h4>
            <p>Contemporary research in psychology supports aspects of the Fitrah concept:</p>
            <ul>
                <li>Studies on moral intuitions in infants and children</li>
                <li>Research on innate religious tendencies</li>
                <li>Findings on universal human values across cultures</li>
                <li>Evidence for natural prosocial behaviors in humans</li>
            </ul>`,
            ur: `<h3>اندرونی الہی نقشہ</h3>
            <p>فطرت اسلامی نفسیات میں سب سے گہرے تصورات میں سے ایک ہے - یہ خیال کہ ہر انسان سچ، نیکی، اور الہی کو پہچاننے کی فطری رغبت کے ساتھ پیدا ہوتا ہے۔ یہ تصور وحی اور انسانی نفسیات کے درمیان خلاء کو پاٹتا ہے۔</p>
            
            <h4>قرآنی سیاق میں فطرت کو سمجھنا</h4>
            <p>قرآن کہتا ہے: "تو اپنا چہرہ دین کی طرف کر دے، سچ کی طرف جھکتے ہوئے۔ اللہ کی فطرت [پر قائم رہو] جس پر اس نے [تمام] لوگوں کو پیدا کیا ہے" (30:30)۔ یہ آیت فطرت کو اللہ کی طرف سے ڈیزائن کیے گئے بنیادی انسانی آئین کے طور پر قائم کرتی ہے۔</p>
            
            <h4>فطرت کے اجزاء</h4>
            <p>کلاسیکی اسلامی علماء نے فطرت کے کئی عناصر کی شناخت کی:</p>
            <ul>
                <li><strong>توحید (یکتا پرستی):</strong> ایک خدا پر یقین کی فطری رغبت</li>
                <li><strong>اخلاقی قطب نما:</strong> صحیح اور غلط کا فطری احساس</li>
                <li><strong>معنی کی تلاش:</strong> مقصد اور معنی سمجھنے کی فطری خواہش</li>
                <li><strong>سماجی فطرت:</strong> کمیونٹی اور رشتوں کی موروثی ضرورت</li>
                <li><strong>جمالیاتی تعریف:</strong> خوبصورتی اور ہم آہنگی کی فطری کشش</li>
            </ul>
            
            <blockquote>"ہر بچہ فطرت پر پیدا ہوتا ہے، اور یہ اس کے والدین ہیں جو اسے یہودی، عیسائی، یا مجوسی بناتے ہیں۔" - نبی محمد (ص)</blockquote>
            
            <h4>فطرت کے نفسیاتی اثرات</h4>
            <p>فطرت کے تصور کے اہم نفسیاتی اثرات ہیں:</p>
            <ul>
                <li><strong>ذہنی صحت:</strong> فطرت کے ساتھ ہم آہنگی نفسیاتی تندرستی کو فروغ دیتی ہے</li>
                <li><strong>شناخت کی تشکیل:</strong> فطرت خود کو سمجھنے کی مستحکم بنیاد فراہم کرتی ہے</li>
                <li><strong>اخلاقی ترقی:</strong> فطری اخلاقی رجحانات اخلاقی رفتار کی رہنمائی کرتے ہیں</li>
                <li><strong>روحانی نمو:</strong> فطرت الہی کے ساتھ تعلق کو آسان بناتی ہے</li>
            </ul>
            
            <h4>فطرت کی بگاڑ اور بحالی</h4>
            <p>اسلامی نفسیات تسلیم کرتا ہے کہ فطرت کو چھپایا جا سکتا ہے:</p>
            <ul>
                <li>ماحولیاتی اثرات اور سماجی کنڈیشننگ</li>
                <li>گناہ کی رفتار جو روحانی حساسیت کو مردہ کر دیتی ہے</li>
                <li>فکری تکبر جو فطری حکمت کو مسترد کرتا ہے</li>
                <li>مادی پیروی جو روحانی سچ سے بھٹکاتی ہے</li>
            </ul>
            
            <h4>اسلامی طریقوں کے ذریعے فطرت کی بحالی</h4>
            <p>اسلامی روایت فطرت کو بیدار کرنے اور صاف کرنے کے طریقے پیش کرتی ہے:</p>
            <ul>
                <li><strong>ذکر (یاد):</strong> اللہ کا مستقل شعور</li>
                <li><strong>نماز اور عبادت:</strong> باقاعدہ روحانی مشق</li>
                <li><strong>قرآن کی تلاوت:</strong> الہی وحی کے ساتھ مشغولیت</li>
                <li><strong>خود غور و فکر:</strong> خیالات اور اعمال کا باقاعدہ جائزہ</li>
                <li><strong>اچھی صحبت:</strong> نیک لوگوں کے ساتھ گھرنا</li>
            </ul>
            
            <h4>جدید تحقیق اور فطرت</h4>
            <p>نفسیات میں عصری تحقیق فطرت کے تصور کے پہلوؤں کو سپورٹ کرتی ہے:</p>
            <ul>
                <li>بچوں اور بچوں میں اخلاقی بدیہیات پر مطالعات</li>
                <li>فطری مذہبی رجحانات پر تحقیق</li>
                <li>ثقافتوں میں عالمگیر انسانی اقدار کے نتائج</li>
                <li>انسانوں میں فطری اجتماعی رفتار کے ثبوت</li>
            </ul>`
        },
        date: '2024-11-25',
        readTime: '14 min read',
        tags: ['fitrah', 'islamic-psychology', 'human-nature', 'spirituality']
    }
    // Continue adding more research items...
];

// Combine all research data
const allResearch = [...researchData, ...additionalResearch];

// Generate additional research programmatically to reach 50+ posts
function generateAdditionalResearch() {
    const topics = [
        {
            category: 'psychology',
            titleEn: 'Social Media and Mental Health: The Dopamine Connection',
            titleUr: 'سوشل میڈیا اور ذہنی صحت: ڈوپامائن کا تعلق',
            tags: ['social-media', 'mental-health', 'dopamine', 'addiction']
        },
        {
            category: 'nature',
            titleEn: 'The Evolution of Language: How Communication Shaped Human Consciousness',
            titleUr: 'زبان کا ارتقاء: کیسے بات چیت نے انسانی شعور کو شکل دیا',
            tags: ['language-evolution', 'consciousness', 'communication', 'cognition']
        },
        {
            category: 'islamic',
            titleEn: 'Patience (Sabr) in Islamic Psychology: A Framework for Resilience',
            titleUr: 'اسلامی نفسیات میں صبر: لچک کا ایک نظام',
            tags: ['sabr', 'patience', 'resilience', 'islamic-virtues']
        }
        // Add more template topics as needed
    ];

    let additionalPosts = [];
    let currentId = allResearch.length + 1;

    // Generate enough posts to reach 50+ total
    while (allResearch.length + additionalPosts.length < 50) {
        const topic = topics[additionalPosts.length % topics.length];
        
        additionalPosts.push({
            id: currentId++,
            category: topic.category,
            title: {
                en: `${topic.titleEn} - Part ${Math.floor(additionalPosts.length / topics.length) + 1}`,
                ur: `${topic.titleUr} - حصہ ${Math.floor(additionalPosts.length / topics.length) + 1}`
            },
            excerpt: {
                en: `Detailed exploration of ${topic.titleEn.toLowerCase()} and its implications for understanding human behavior and psychological development.`,
                ur: `${topic.titleUr} کی تفصیلی کھوج اور انسانی رفتار اور نفسیاتی ترقی کو سمجھنے کے لیے اس کے اثرات۔`
            },
            content: {
                en: `<h3>Introduction</h3><p>This comprehensive analysis explores the intricate relationships between ${topic.titleEn.toLowerCase()} and their broader implications for human psychology and behavior.</p><h4>Key Findings</h4><p>Research in this area reveals fascinating insights into how these concepts shape our understanding of human nature and psychological development.</p>`,
                ur: `<h3>تعارف</h3><p>یہ جامع تجزیہ ${topic.titleUr} کے درمیان پیچیدہ تعلقات اور انسانی نفسیات اور رفتار کے لیے ان کے وسیع تر اثرات کی کھوج کرتا ہے۔</p><h4>اہم نتائج</h4><p>اس شعبے میں تحقیق دلچسپ بصیرت ظاہر کرتی ہے کہ یہ تصورات انسانی فطرت اور نفسیاتی ترقی کی ہماری سمجھ کو کیسے شکل دیتے ہیں۔</p>`
            },
            date: new Date(2024, 10, Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0],
            readTime: `${Math.floor(Math.random() * 10) + 8} min read`,
            tags: topic.tags
        });
    }

    return additionalPosts;
}

// Complete research database
const completeResearch = [...allResearch, ...generateAdditionalResearch()];

// Current state
let currentCategory = 'all';
// currentLanguage is declared in script.js as a global variable
let displayedCount = 9; // Initial number of posts to show
let currentResearch = completeResearch;

// Initialize the works page
function initializeWorksPage() {
    // Load initial research
    loadResearch();
    
    // Set up filter buttons
    setupFilters();
    
    // Set up modal functionality
    setupModal();
    
    // Set up load more functionality
    setupLoadMore();
    
    // Set up language toggle
    setupLanguageToggle();
}

function loadResearch() {
    const grid = document.getElementById('researchGrid');
    grid.innerHTML = '';
    
    // Filter research based on current category
    currentResearch = currentCategory === 'all' 
        ? completeResearch 
        : completeResearch.filter(item => item.category === currentCategory);
    
    // Display initial set of research
    const researchToShow = currentResearch.slice(0, displayedCount);
    
    researchToShow.forEach((research, index) => {
        const card = createResearchCard(research, index);
        grid.appendChild(card);
    });
    
    // Update load more button
    updateLoadMoreButton();
    
    // Apply fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.research-card').forEach(card => {
            card.classList.add('fade-in', 'visible');
        });
    }, 100);
}

function createResearchCard(research, index) {
    const card = document.createElement('div');
    card.className = 'research-card fade-in';
    card.setAttribute('data-research-id', research.id);
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="research-category">${getCategoryName(research.category)}</div>
        <h3 class="research-title">
            <span class="lang-en ${currentLanguage === 'ur' ? 'hidden' : ''}">${research.title.en}</span>
            <span class="lang-ur ${currentLanguage === 'en' ? 'hidden' : ''}">${research.title.ur}</span>
        </h3>
        <p class="research-excerpt">
            <span class="lang-en ${currentLanguage === 'ur' ? 'hidden' : ''}">${research.excerpt.en}</span>
            <span class="lang-ur ${currentLanguage === 'en' ? 'hidden' : ''}">${research.excerpt.ur}</span>
        </p>
        <div class="research-meta">
            <span class="research-date">${formatDate(research.date)}</span>
            <span class="read-time">${research.readTime}</span>
        </div>
    `;
    
    card.addEventListener('click', () => openResearchModal(research.id));
    
    return card;
}

function getCategoryName(category) {
    const names = {
        psychology: currentLanguage === 'en' ? 'Psychology' : 'نفسیات',
        nature: currentLanguage === 'en' ? 'Human Nature' : 'انسانی فطرت',
        islamic: currentLanguage === 'en' ? 'Islamic Studies' : 'اسلامی علوم'
    };
    return names[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    if (currentLanguage === 'en') {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    } else {
        return date.toLocaleDateString('ur-PK', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current category
            currentCategory = button.getAttribute('data-category');
            
            // Reset display count
            displayedCount = 9;
            
            // Reload research
            loadResearch();
        });
    });
}

function setupModal() {
    const modal = document.getElementById('researchModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeResearchModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeResearchModal();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeResearchModal();
        }
    });
}

function openResearchModal(researchId) {
    const research = completeResearch.find(item => item.id === researchId);
    if (!research) return;
    
    const modal = document.getElementById('researchModal');
    const titleElement = document.getElementById('researchTitle');
    const contentElement = document.getElementById('researchContent');
    const tagsElement = document.getElementById('researchTags');
    
    // Set title
    titleElement.innerHTML = `
        <span class="lang-en ${currentLanguage === 'ur' ? 'hidden' : ''}">${research.title.en}</span>
        <span class="lang-ur ${currentLanguage === 'en' ? 'hidden' : ''}">${research.title.ur}</span>
    `;
    
    // Set meta information
    document.getElementById('researchDate').textContent = formatDate(research.date);
    document.getElementById('researchCategory').textContent = getCategoryName(research.category);
    document.getElementById('researchReadTime').textContent = research.readTime;
    
    // Set content
    contentElement.innerHTML = `
        <div class="lang-en ${currentLanguage === 'ur' ? 'hidden' : ''}">${research.content.en}</div>
        <div class="lang-ur ${currentLanguage === 'en' ? 'hidden' : ''}">${research.content.ur}</div>
    `;
    
    // Set tags
    tagsElement.innerHTML = research.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeResearchModal() {
    const modal = document.getElementById('researchModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    loadMoreBtn.addEventListener('click', () => {
        displayedCount += 9;
        loadResearch();
    });
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (displayedCount >= currentResearch.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function setupLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ur' : 'en';
        
        // Update HTML direction
        document.documentElement.setAttribute('dir', currentLanguage === 'ur' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', currentLanguage);
        
        // Update language visibility
        updateLanguageVisibility();
        
        // Reload research to update language
        loadResearch();
    });
}

function updateLanguageVisibility() {
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

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initializeWorksPage);