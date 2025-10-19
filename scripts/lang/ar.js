const translations_ar = {
	// Interface
	"timeline_title": "الخط الزمني لويزنوث",
	"timeline_subtitle": "استكشف التاريخ الزمني لمملكة ويزنوث والمناطق المحيطة",
	"language_label": "اللغة:",
	"theme_label": "السمة:",
	"theme_light": "فاتح",
	"theme_dark": "غامق",
	"footer_text": "الخط الزمني لويزنوث &copy; 2025 - مبني على التاريخ الرسمي لمعركة ويزنوث",
	"keywords_title": "تصفية حسب الكلمات المفتاحية",
	"reset_highlights": "إعادة تعليم التمييز",
	"toggle_all": "إظهار/إخفاء الكل",
	"no_results": "لا توجد نتائج لهذه الكلمة المفتاحية",
    "filters_expand": "توسيع",
    "filters_collapse": "طي",
    "filter_all": "الكل",
    "filter_other": "أخرى",
	"how_to_title": "كيفية التنفيذ",
	"how_to_modal_title": "دليل إرشادي",
	"notifications_label": "الإشعارات:",
	"notifications_enabled": "مفعل",
	"notifications_disabled": "معطل", 
	"notifications_blocked": "محظور",
	"notifications_unsupported": "غير مدعوم",
	"notification_prompt_title": "ابقَ على اطلاع",
	"notification_prompt_message": "احصل على إشعارات حول أحداث الجدول الزمني الجديدة والتحديثات",
	"notification_prompt_enable": "تفعيل",
	"notification_prompt_later": "لاحقاً",
	"notification_test_title": "إشعار تجريبي",
	"notification_test_body": "هذا إشعار تجريبي من Wesnoth Timeline",
	"notification_update_title": "تم تحديث الجدول الزمني",
	"notification_update_body": "محتوى تاريخي جديد متاح",
	"notification_digest_title": "ملخص Wesnoth",
	"notification_digest_body": "اطلع على الأحداث التاريخية المميزة اليوم",
	
	// عناوين الألسنة
	"how_to_tab_language": "إضافة لغة",
	"how_to_tab_era": "إضافة حقبة",
	"how_to_tab_event": "إضافة حدث",
	"how_to_tab_filter": "إضافة عامل تصفية",
	
	// قسم اللغة
	"how_to_language_title": "كيفية إضافة لغة جديدة",
	"how_to_language_step1_title": "إنشاء ملف اللغة",
	"how_to_language_step1_desc": "أنشئ ملف JavaScript جديد في مجلد scripts/lang/ باسم رمز اللغة (مثل ar.js للعربية).",
	"how_to_language_step2_title": "تحديث HTML",
	"how_to_language_step2_desc": "أضف خيار اللغة إلى منتقي اللغة في index.html:",
	"how_to_language_step3_title": "تسجيل اللغة",
	"how_to_language_step3_desc": "أضف اللغة إلى كائن الترجمات في translation-manager.js:",
	"how_to_language_rec1": "استخدم رموز ISO لأسماء الملفات",
	"how_to_language_rec2": "حافظ على مفاتيح الترجمة متسقة عبر جميع اللغات",
	"how_to_language_rec3": "اختبر التخطيطات من اليمين لليسار للغات مثل العربية",
	
	// قسم الحقبة
	"how_to_era_title": "كيفية إضافة حقبة جديدة",
	"how_to_era_step1_title": "إضافة قسم حقبة في HTML",
	"how_to_era_step1_desc": "أضف قسم حقبة جديد في ملف index.html ضمن محتوى الحقب:",
	"how_to_era_step2_title": "إضافة الترجمات",
	"how_to_era_step2_desc": "أضف مفاتيح الترجمة للحقبة الجديدة في جميع ملفات اللغة:",
	"how_to_era_rec1": "استخدم تسمية متسقة لمعرفات الحقب",
	"how_to_era_rec2": "ضمّن محتوى HTML غني في الأوصاف",
	"how_to_era_rec3": "أضف أيقونات مناسبة للاتساق البصري",
	
	// قسم الحدث
	"how_to_event_title": "كيفية إضافة حدث زمني جديد",
	"how_to_event_step1_title": "إضافة بيانات الحدث",
	"how_to_event_step1_desc": "أضف كائن حدث جديد إلى مصفوفة timelineData في timeline-data.js:",
	"how_to_event_step2_title": "إضافة الترجمات",
	"how_to_event_step2_desc": "أضف مفاتيح الترجمة للحدث في جميع ملفات اللغة:",
	"how_to_event_rec1": "استخدم أنماطًا متسقة لمفاتيح الترجمة",
	"how_to_event_rec2": "ضمّن ترميز HTML مناسب في الأوصاف",
	"how_to_event_rec3": "عيّن قيم الحقبة والفئة الصحيحة",
	
	// قسم عامل التصفية
	"how_to_filter_title": "كيفية إضافة عامل تصفية جديد",
	"how_to_filter_step1_title": "تحديث منطق التصفية",
	"how_to_filter_step1_desc": "عدّل دوال التصفية في timeline-manager.js للتعامل مع نوع عامل التصفية الجديد:",
	"how_to_filter_step2_title": "تحديث تطبيق التصفية",
	"how_to_filter_step2_desc": "حدّث دوال applyFilters() و passesFilters() لتشمل عامل التصفية الجديد:",
	"how_to_filter_rec1": "استخدم أسماء عوامل تصفية توضيحية",
	"how_to_filter_rec2": "اختبر تركيبات عوامل التصفية بدقة",
	"how_to_filter_rec3": "تأكد من الإدارة السليمة للحالات",
	
	// مشترك
	"how_to_recommendations": "توصيات",
	
	// ترجمات الفلتر الجديد
	"filters_title": "تصفية الأحداث",
	"filter_category": "الفئة",
	"filter_campaign": "الحملات",
	"filter_universe": "الكون",
	"apply_filters": "تطبيق الفلاتر",
	"reset_filters": "إعادة تعيين الفلاتر",
	"no_filter_results": "لا توجد أحداث تطابق الفلاتر المحددة",
	"filter_mainline": "الرئيسية",
	"filter_umc": "UMC",
	"filter_mainline_non_canon": "الرئيسية غير الكانونية",
	"filter_universe_wesnoth": "ويزنوث",
	"meta_category": "الفئة",
	"meta_universe": "الكون", 
	"meta_campaigns": "الحملات",
	"intro_title": "حول هذا الخط الزمني", 
	"intro_expand": "توسيع",
	"intro_collapse": "طي",
	"intro_text": "هذا هو التاريخ الزمني الرسمي لبلد ويزنوث والمناطق المحيطة به، مستخلص من الروايات المكتوبة والتواريخ الشفهية التي تم تناقلها عبر الأجيال. الأجزاء المحاطة بأقواس وتحتوي على علامة استفهام هي معلومات مفترضة أو غير مؤكدة. يتم ترتيب التاريخ حسب العصر، وداخل العصر حسب التاريخ، باستخدام تأسيس ويزنوث كأساس. BW = قبل ويزنوث، YW = سنوات ويزنوث. تعمل بنفس الطريقة التي تعمل بها BC و AD في نظام حفظ الوقت لدينا. يتم تلخيص كل عصر قبل أن يبدأ الخط الزمني لذلك العصر. تاريخ القارة العظمى هو موضوع للدراسة النشطة.",
	"intro_text_2": "العالم الذي تقيم فيه ويزنوث يسمى إيرديا. قبل السقوط العظيم والعصر التكنولوجي (غير المسجل)، نادرًا ما يتم استخدام هذا الاسم.",
	"spoiler_warning": "تحذير spoiler! تحتوي هذه الصفحة على spoilers للحبكة لعدة حملات.",
	
	// Campaign names
	"campaign_the_rise_of_wesnoth": "صعود ويزنوث",
	"campaign_legend_of_wesmere": "أسطورة ويزمير",
	"campaign_a_tale_of_two_brothers": "حكاية أخوين",
	"campaign_descent_into_darkness": "هبوط في الظلام",
	"campaign_delfadors_memoirs": "مذكرات ديلفادور",
	"campaign_liberty": "الحرية",
	"campaign_heir_to_the_throne": "وريث العرش",
	"campaign_northern_rebirth": "ولادة الشمال من جديد",
	"campaign_the_hammer_of_thursagan": "مطرقة ثورساجان",
	"campaign_eastern_invasion": "الغزو الشرقي",
	"campaign_dead_water": "المياه الميتة",
	"campaign_under_the_burning_suns": "تحت الشمس الحارقة",
	
	//  Era translations
	"general_eras_title": "العصور العامة",
	"eras_expand": "توسيع",
	"eras_collapse": "طي",
	"era_expand": "توسيع",
	"era_collapse": "طي",
	"coming_soon": "قريباً",
	
	// Era titles
	"era_founding_title": "تأسيس ويزنوث",
	"era_taming_title": "ترويح البرية",
	"era_golden_age_title": "العصر الذهبي لويزنوث",
	"era_first_dark_age_title": "العصر المظلم الأول لويزنوث",
	"era_turmoil_title": "اضطرابات آشيفير",
	"era_fear_title": "عصر الخوف",
	"era_silver_age_title": "العصر الفضي لويزنوث", 
	"era_legacy_title": "إرث كارون العين السوداء",
	"era_after_fall_title": "بعد السقوط العظيم",
	
	// Eras
	"era_founding_title": "تأسيس ويزنوث",
	"era_founding_description": "خلال عصر تأسيس ويزنوث، كان هناك موقعان جغرافيان مهمان، هما <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span> و<span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> هو الشخصية التاريخية الرئيسية في هذا الوقت. ينتهي هذا العصر بتأسيس <span class='WTL-timeline-manager-place' data-place='Wesnoth'>ويزنوث</span> كدولة في <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>، وهجوم <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span> على كل من <span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span> و<span class='WTL-timeline-manager-faction' data-faction='humans'>البشر</span> من البحر.",
	
	// Timeline items with HTML structure
	"inhabitants_early_title": "أوائل السكان",
	"inhabitants_early_desc": "<span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span> و<span class='WTL-timeline-manager-faction' data-faction='dwarves'>الأقزام</span> يسكنون <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>. <span class='WTL-timeline-manager-faction' data-faction='humans'>البشر</span> يسكنون <span class='WTL-timeline-manager-place' data-place='distant West'>الغرب البعيد</span>. شعب <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> يستعمر <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span> من قارة أبعد إلى الغرب.",
	
	"lich_lords_title": "وصول أسياد الليتش",
	"lich_lords_desc": "<span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>أسياد الليتش</span> يصلون إلى <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span> بعد خسارة حرب في <span class='WTL-timeline-manager-place' data-place='distant West'>الغرب البعيد</span>. بعد حرب طويلة، شعب <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> يصبح مسيطراً على <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span>. '<span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>شعب ويس</span>' و<span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>أسياد الليتش</span> الخاصين بهم يتم دفعهم إلى أراضي هامشية.",
	
	"discovery_title": "اكتشاف القارة العظمى",
	"discovery_desc": "الأمير الوريث لـ<span class='WTL-timeline-manager-place' data-place='Southbay'>ساوث باي</span> يكتشف <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>.",
	
	"prince_death_title": "وفاة الأمير الوريث",
	"prince_death_desc": "بعد هذه الرحلات إلى <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>، الأمير الوريث الأكبر يمرض ويموت. شقيقه الأصغر متورط في مؤامرة لقتله. كإلهاء، الأمير الأصغر يبدأ حرباً مع <span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>شعب ويس</span> و<span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>أسياد الليتش</span> الخاصين بهم.",
	
	"settlers_arrival_title": "وصول المستوطنين",
	"settlers_arrival_desc": "المستوطنون <span class='WTL-timeline-manager-faction' data-faction='humans'>البشر</span>، بقيادة الأمير <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span>، يصلون بأعداد كبيرة إلى الساحل الغربي لـ<span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span> (الوصول يحدث في مستقبل <span class='WTL-timeline-manager-place' data-place='Bay of Pearls'>خليج اللآلئ</span>). <span class='WTL-timeline-manager-faction' data-faction='humans'>البشر</span> يصلون في وسط نزاع متأجج بين <span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span> و<span class='WTL-timeline-manager-faction' data-faction='dwarves'>الأقزام</span>.",
	
	"wesnoth_founding_title": "تأسيس ويزنوث",
	"wesnoth_founding_desc": "تم منح <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> السهول شمال وجنوب <span class='WTL-timeline-manager-place' data-place='Great River'>النهر العظيم</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> يوافق على ميثاق الدفاع المتبادل مع <span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span> يؤسس دولة <span class='WTL-timeline-manager-place' data-place='Wesnoth'>ويزنوث</span> في السهل الأوسط جنوب <span class='WTL-timeline-manager-place' data-place='Great River'>النهر العظيم</span>. تبدأ فترة حكم <span class='WTL-timeline-manager-person' data-person='Haldric I'>هالدريك الأول</span> (سابقاً الأمير هالدريك).",
	
	"orcs_arrival_title": "وصول الأورك إلى القارة العظمى",
	"orcs_arrival_desc": "<span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span>، بتتبع السفن الهاربة من <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span>، يبدأون في الوصول إلى <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>. هؤلاء <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span> هُزموا بواسطة قوات <span class='WTL-timeline-manager-person' data-person='Haldric'>هالدريك</span>. بعض الناجين من الأورك هربوا مرة أخرى إلى <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span>، بينما انتقل آخرون لمهاجمة <span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span>.",
	
	"winds_of_fate_title": "رياح القدر",
	"winds_of_fate_desc": "<span class='WTL-timeline-manager-faction' data-faction='Drakes'>الدرايك</span> يصلون إلى <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span>. <span class='WTL-timeline-manager-place' data-place='Elensefar'>إلينسيفار</span> و<span class='WTL-timeline-manager-place' data-place='Wesmere'>ويسمير</span> تم الإغارة عليهم بواسطة <span class='WTL-timeline-manager-faction' data-faction='Drakes'>الدرايك</span>. <span class='WTL-timeline-manager-faction' data-faction='Drakes'>الدرايك</span> يبنون عشاً شمال <span class='WTL-timeline-manager-place' data-place='Wesmere'>ويسمير</span>.",
	
	"second_orc_wave_title": "الموجة الثانية من الأورك",
	"second_orc_wave_desc": "موجة ثانية من <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span> تصل من <span class='WTL-timeline-manager-place' data-place='Green Isle'>الجزيرة الخضراء</span>؛ هؤلاء <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span> يبدأون في المطالبة بأجزاء كبيرة من شمال <span class='WTL-timeline-manager-place' data-place='Great Continent'>القارة العظمى</span> لأنفسهم. <span class='WTL-timeline-manager-person' data-person='Erlornas'>إرلورناس</span> من <span class='WTL-timeline-manager-place' data-place='Wesmere'>ويسمير</span> متورط في أول صدام مباشر للإلف مع <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span>.",
	
	"haldric_death_title": "وفاة هالدريك الأول",
	"haldric_death_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric I'>هالدريك الأول</span> يموت. <span class='WTL-timeline-manager-person' data-person='Haldric II'>هالدريك الثاني</span> يعتلي العرش. <span class='WTL-timeline-manager-faction' data-faction='humans'>البشر</span> و<span class='WTL-timeline-manager-faction' data-faction='elves'>الإلف</span> يهزمون <span class='WTL-timeline-manager-faction' data-faction='orcs'>الأورك</span> بشكل حاسم في <span class='WTL-timeline-manager-place' data-place='Tath'>تاث</span>، مما يوقف التقدم الأوركي."
};