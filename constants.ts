
import { Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: {
      services: 'Services',
      pricing: 'Pricing',
      whyUs: 'Why Us',
      contact: 'Contact',
      login: 'Merchant Login'
    },
    hero: {
      title: 'Your Trust, Our Delivery',
      subtitle: 'Fast, secure and reliable last-mile delivery in the heart of Marrakech.',
      trackPlaceholder: 'Enter tracking number (e.g. ML12345)',
      trackButton: 'Track Package'
    },
    services: {
      title: 'Our Professional Logistics Solutions',
      lastMile: {
        title: 'Last-Mile Delivery',
        desc: 'We offer specialized door-to-door delivery across all Marrakech districts including Gueliz, Medina, and Hivernage. Our couriers are experts in navigating complex local routes to ensure your customers receive their orders on time, every time.'
      },
      cod: {
        title: 'Cash on Delivery (COD)',
        desc: 'Maximize your sales with our secure Cash on Delivery service. we handle the collection of payments at the customer\'s doorstep and provide rapid bank remittances within 24-48 hours, keeping your cash flow healthy and consistent.'
      },
      ecommerce: {
        title: 'E-commerce Fulfillment',
        desc: 'A complete end-to-end solution for online merchants. From storage in our Marrakech hub to packaging and delivery, we integrate with your store to automate your logistics so you can focus on growing your brand.'
      }
    },
    pricing: {
      title: 'Transparent Local Rates',
      subtitle: 'Professional delivery starting from 18 DH. No hidden fees, just pure efficiency.',
      tiers: [
        { range: 'Occasional (1-3)', price: '30 DH', desc: 'Per package - Ideal for small startups or personal shipments.' },
        { range: 'Regular (4-10)', price: '20 DH', desc: 'Per package - Perfect for growing Marrakech local businesses.' },
        { range: 'Premium (10+)', price: '18 DH', desc: 'Per package - Our best rate for high-volume e-commerce stores.', recommended: true }
      ]
    },
    whyUs: {
      title: 'Why Choose Menara Logistics?',
      items: [
        { title: 'Local Expertise', desc: 'We know every alley of the Marrakech Medina and suburban neighborhoods.' },
        { title: 'Security First', desc: 'Your goods and payments are handled with the highest level of security.' },
        { title: 'Fast Remittance', desc: 'Get your COD payments processed and paid back within 24-48 hours.' },
        { title: 'Real-time Tracking', desc: 'Modern technology to keep you and your customers informed.' }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Our team is ready to optimize your delivery chain. Contact us for a custom quote or immediate assistance.',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      placeholder: 'Tell us about your delivery volume and business needs...'
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        content: `Privacy Policy: Menara Logistics\nEffective Date: January 2026\n\n1. Introduction\nWelcome to Menara Logistics. We value your trust (“Your Trust, Our Delivery”). This Privacy Policy explains how we collect, use, and protect information when you use our delivery services in Marrakech and our website.\n\n2. Information We Collect\nWe collect information necessary to fulfill delivery contracts and manage Cash on Delivery (COD) transactions:\n- For Merchants: Name, business address, phone number, and bank details for COD remittances.\n- For End Customers: Name, delivery address, phone number, and order details provided by the merchant.\n- Transaction Data: Payment status (Paid/Pending) and delivery history.\n\n3. How We Use Your Information\nWe use the collected data strictly for:\n- Delivery Fulfillment: Getting the package from the merchant to the customer in Marrakech.\n- COD Management: Collecting cash and ensuring it is safely returned to the merchant.\n- Communication: Sending SMS or WhatsApp updates regarding delivery status.\n- Security: Preventing fraud and ensuring the safety of our couriers and your goods.\n\n4. Data Sharing & Third Parties\nWe never sell your data. We only share information with:\n- Our professional couriers (only the address and phone number needed for delivery).\n- Government authorities if required by Moroccan law.\n\n5. Data Security\nMenara Logistics implements high-standard security measures to protect your data from unauthorized access. Our merchant portal is secured, and cash handling records are encrypted.\n\n6. Your Rights (Law 09-08)\nIn accordance with Moroccan law, you have the right to:\n- Access the personal data we hold about you.\n- Request the correction of inaccurate information.\n- Request the deletion of your data once the delivery contract is completed.\n\n7. Cookies\nOur website uses cookies to improve the user experience (e.g., remembering your login for the Merchant Portal) and to track package locations.\n\n8. Contact Us\nIf you have questions regarding this policy or your data, please contact us:\nAddress: Azli rue ibn batota marrakech, Morocco\nWhatsApp: +212 608 511 400\nEmail: manaralogistici@gmail.com`
      },
      terms: {
        title: 'Terms of Service',
        content: `Terms of Service: Menara Logistics\nLast Updated: January 2026\n\n1. Acceptance of Terms\nBy partnering with Menara Logistics, merchants (hereafter referred to as "The Client") agree to be bound by these terms. Our slogan, “Your Trust, Our Delivery,” is the foundation of our partnership.\n\n2. Scope of Service\nMenara Logistics provides e-commerce delivery services within Marrakech and surrounding areas, including:\n- Pick-up of goods from the Client.\n- Last-mile delivery to the end customer.\n- Collection of Cash on Delivery (COD) payments.\n\n3. Merchant Responsibilities\nThe Client is responsible for:\n- Providing accurate customer names, addresses, and phone numbers.\n- Ensuring products are securely packaged for transport.\n- Declaring any fragile or high-value items before shipment.\n\n4. Cash on Delivery (COD) & Payments\n- Collection: We collect the exact amount specified by the Client on the delivery invoice.\n- Remittance: Collected funds will be transferred to the Client within 24 to 48 hours after successful delivery.\n- Service Fees: Our delivery fees will be deducted from the collected cash or billed weekly, as per the agreed rate.\n\n5. Delivery Attempts & Returns\n- We make up to 3 attempts to contact the end customer.\n- If the customer refuses the package or is unreachable, the item will be returned to the Client.\n- Return fees may apply for refused packages.\n\n6. Prohibited Items\nMenara Logistics does not deliver illegal substances, hazardous materials, or items prohibited by Moroccan Law. We reserve the right to inspect packages if security concerns arise.\n\n7. Liability & Insurance\n- Menara Logistics is liable for the loss or damage of packages while in our possession, up to a maximum value of 500 DH unless a higher value was declared and insured.\n- We are not liable for internal electronic failure or damage to items that were not properly packaged by the Client.\n\n8. Delays\nWhile we strive for 24h delivery in Marrakech, Menara Logistics is not responsible for delays caused by "Force Majeure" (weather, strikes, or road closures).\n\n9. Termination\nEither party may terminate the partnership with 7 days written notice. Any outstanding COD funds will be settled upon termination.\n\n10. Governing Law\nThese terms are governed by the laws of the Kingdom of Morocco. Any disputes shall be settled by the courts of Marrakech.`
      }
    }
  },
  fr: {
    nav: {
      services: 'Services',
      pricing: 'Tarifs',
      whyUs: 'Pourquoi Nous',
      contact: 'Contact',
      login: 'Espace Marchand'
    },
    hero: {
      title: 'Votre Confiance, Notre Livraison',
      subtitle: 'Livraison rapide, sécurisée et fiable à Marrakech.',
      trackPlaceholder: 'Numéro de suivi (ex: ML12345)',
      trackButton: 'Suivre le colis'
    },
    services: {
      title: 'Nos Solutions Logistiques Professionnelles',
      lastMile: {
        title: 'Livraison du Dernier Kilomètre',
        desc: 'Nous proposons une livraison spécialisée de porte à porte dans tous les quartiers de Marrakech : Guéliz, Médina, Hivernage. Nos coursiers sont experts pour naviguer dans les ruelles locales et garantir une livraison ponctuelle.'
      },
      cod: {
        title: 'Paiement à la Livraison (COD)',
        desc: 'Optimisez vos ventes avec notre service sécurisé de paiement à la livraison. Nous gérons la collecte d\'argent à la porte du client et effectuons des virements rapides sous 24-48h pour maintenir votre flux de trésorerie.'
      },
      ecommerce: {
        title: 'Logistique E-commerce',
        desc: 'Une solution complète de bout en bout pour les e-commerçants. Du stockage dans notre hub de Marrakech à l\'emballage et la livraison, nous automatisons votre logistique pour booster votre croissance.'
      }
    },
    pricing: {
      title: 'Tarifs Locaux Transparents',
      subtitle: 'Livraison professionnelle à partir de 18 DH. Aucun frais caché, uniquement de l\'efficacité.',
      tiers: [
        { range: 'Occasionnel (1-3)', price: '30 DH', desc: 'Par colis - Idéal pour les petites startups ou envois personnels.' },
        { range: 'Régulier (4-10)', price: '20 DH', desc: 'Par colis - Parfait pour les entreprises locales en pleine croissance.' },
        { range: 'Premium (10+)', price: '18 DH', desc: 'Par colis - Notre meilleur tarif pour les gros volumes e-commerce.', recommended: true }
      ]
    },
    whyUs: {
      title: 'Pourquoi Choisir Menara Logistics ?',
      items: [
        { title: 'Expertise Locale', desc: 'Nous connaissons chaque ruelle de la Médina et des quartiers périphériques.' },
        { title: 'Sécurité Maximale', desc: 'Vos marchandises et paiements sont gérés avec le plus haut niveau de sécurité.' },
        { title: 'Virement Rapide', desc: 'Recevez vos paiements COD traités et reversés sous 24-48 heures.' },
        { title: 'Suivi en Temps Réel', desc: 'Technologie moderne pour vous informer, vous et vos clients.' }
      ]
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Notre équipe est prête à optimiser votre chaîne de livraison. Contactez-nous pour un devis personnalisé.',
      name: 'Nom Complet',
      email: 'Adresse Email',
      message: 'Votre Message',
      send: 'Envoyer',
      success: 'Message envoyé avec succès !',
      placeholder: 'Parlez-nous de vos volumes de livraison et de vos besoins...'
    },
    legal: {
      privacy: {
        title: 'Politique de Confidentialité',
        content: `Politique de Confidentialité : Menara Logistics\nDate d'effet : Janvier 2026\n\n1. Introduction\nBienvenue chez Menara Logistics. Nous valorisons votre confiance (« Votre Confiance, Notre Livraison »). Cette politique explique comment nous collectons et protégeons vos données à Marrakech.\n\n2. Informations collectées\nNous collectons les données nécessaires pour les contrats de livraison et le COD :\n- Marchands : Nom, adresse, téléphone, RIB.\n- Clients : Nom, adresse de livraison, téléphone.\n\n3. Utilisation\nUtilisation strictement limitée à la livraison, la gestion du COD, la communication (SMS/WhatsApp) et la sécurité.\n\n4. Partage\nNous ne vendons jamais vos données. Partage uniquement avec nos coursiers et autorités légales.\n\n5. Sécurité\nMesures de haute sécurité pour protéger l'accès aux données.\n\n6. Vos Droits (Loi 09-08)\nAccès, rectification et suppression de vos données personnelles.\n\n8. Contact\nAzli rue ibn batota marrakech, Maroc | WhatsApp: +212 608 511 400 | Email: manaralogistici@gmail.com`
      },
      terms: {
        title: 'Conditions d\'Utilisation',
        content: `Conditions de Service : Menara Logistics\nDernière mise à jour : Janvier 2026\n\n1. Acceptation des termes\nEn s'associant à Menara Logistics, les marchands acceptent d'être liés par ces termes. Notre slogan, « Votre Confiance, Notre Livraison », est la base de notre partenariat.\n\n2. Portée du service\nLivraison du dernier kilomètre à Marrakech, collecte du COD et reversement des fonds.\n\n3. Responsabilités\nLe client doit fournir des informations exactes et emballer les produits de manière sécurisée.\n\n4. Paiements & COD\nLes fonds collectés sont transférés sous 24 à 48 heures après livraison réussie.\n\n5. Tentatives & Retours\nNous effectuons jusqu'à 3 tentatives de livraison. En cas d'échec, le colis est retourné au marchand.\n\n6. Articles interdits\nTransport de substances illégales ou dangereuses interdit.`
      }
    }
  },
  ar: {
    nav: {
      services: 'خدماتنا',
      pricing: 'الأسعار',
      whyUs: 'لماذا نحن',
      contact: 'اتصل بنا',
      login: 'دخول التجار'
    },
    hero: {
      title: 'ثقتكم، شحنتكم',
      subtitle: 'خدمة توصيل سريعة وآمنة وموثوقة في قلب مدينة مراكش.',
      trackPlaceholder: 'أدخل رقم التتبع (مثلاً ML12345)',
      trackButton: 'تتبع الشحنة'
    },
    services: {
      title: 'حلولنا اللوجستية الاحترافية',
      lastMile: {
        title: 'توصيل الميل الأخير',
        desc: 'نقدم خدمة توصيل متخصصة من الباب إلى الباب في جميع أحياء مراكش بما في ذلك جليز والمدينة والمنارة. موظفونا خبراء في التنقل في المسارات المحلية لضمان وصول طلبات عملائك في الوقت المحدد.'
      },
      cod: {
        title: 'الدفع عند الاستلام (COD)',
        desc: 'زد مبيعاتك من خلال خدمة الدفع عند الاستلام الآمنة. نحن نتولى تحصيل الأموال من العميل ونقدم تحويلات بنكية سريعة في غضون 24-48 ساعة، مما يحافظ على سيولة مشروعك.'
      },
      ecommerce: {
        title: 'تكامل التجارة الإلكترونية',
        desc: 'حل متكامل وشامل للتجار عبر الإنترنت. من التخزين في مركزنا بمراكش إلى التغليف والتوصيل، نقوم بأتمتة العمليات اللوجستية الخاصة بك لتركز على نمو علامتك التجارية.'
      }
    },
    pricing: {
      title: 'أسعار محلية شفافة',
      subtitle: 'توصيل احترافي يبدأ من 18 درهم. لا رسوم خفية، كفاءة عالية فقط.',
      tiers: [
        { range: 'عشوائي (1-3)', price: '30 درهم', desc: 'لكل شحنة - مثالي للشركات الناشئة الصغيرة أو الشحنات الشخصية.' },
        { range: 'منتظم (4-10)', price: '20 درهم', desc: 'لكل شحنة - مثالي للشركات المحلية المتنامية في مراكش.' },
        { range: 'مميز (10+)', price: '18 درهم', desc: 'لكل شحنة - أفضل سعر لدينا للمتاجر ذات الأحجام الكبيرة.', recommended: true }
      ]
    },
    whyUs: {
      title: 'لماذا تختار منارة لوجيستيكس؟',
      items: [
        { title: 'خبرة محلية', desc: 'نحن نعرف كل زقاق في مدينة مراكش والأحياء المحيطة بها.' },
        { title: 'الأمان أولاً', desc: 'يتم التعامل مع بضائعك ومدفوعاتك بأعلى مستوى من الأمان.' },
        { title: 'تحويل سريع', desc: 'احصل على مدفوعات الدفع عند الاستلام ومعالجتها في غضون 24-48 ساعة.' },
        { title: 'تتبع في الوقت الفعلي', desc: 'تكنولوجيا حديثة لإبقائك أنت وعملاؤك على اطلاع دائم.' }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'فريقنا جاهز لتحسين سلسلة التوصيل الخاصة بك. اتصل بنا للحصول على عرض سعر مخصص أو مساعدة فورية.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      success: 'تم إرسال الرسالة بنجاح!',
      placeholder: 'أخبرنا عن حجم شحناتك واحتياجات عملك...'
    },
    legal: {
      privacy: {
        title: 'سياسة الخصوصية',
        content: `سياسة الخصوصية: منارة لوجيستيكس\nتاريخ النفاذ: يناير 2026\n\n1. مقدمة\nمرحبًا بكم في منارة لوجيستيكس. نحن نقدر ثقتكم ("ثقتكم، شحنتكم"). تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات عند استخدام خدمات التوصيل الخاصة بنا في مراكش وموقعنا الإلكتروني.\n\n2. المعلومات التي نجمعها\nنجمع المعلومات اللازمة لتنفيذ عقود التوصيل وإدارة معاملات الدفع عند الاستلام (COD):\n- للتجار: الاسم، عنوان العمل، رقم الهاتف، والتفاصيل البنكية لتحويلات الأموال.\n- للعملاء النهائيين: الاسم، عنوان التوصيل، رقم الهاتف، وتفاصيل الطلب المقدمة من التاجر.\n- بيانات المعاملات: حالة الدفع وسجل التوصيل.\n\n3. كيف نستخدم معلوماتك\nنستخدم البيانات المجمعة بدقة من أجل:\n- تنفيذ التوصيل: إيصال الشحنة من التاجر إلى العميل في مراكش.\n- إدارة الدفع عند الاستلام: تحصيل النقد وضمان عودته بأمان إلى التاجر.\n- التواصل: إرسال تحديثات عبر SMS أو WhatsApp بخصوص حالة التوصيل.\n- الأمان: منع الاحتيال وضمان سلامة مناديبنا وبضائعكم.\n\n4. مشاركة البيانات\nنحن لا نبيع بياناتك أبداً. نشارك المعلومات فقط مع مناديبنا المحترفين والسلطات الحكومية إذا لزم الأمر بموجب القانون المغربي.\n\n5. أمن البيانات\nتطبق منارة لوجيستيكس معايير أمنية عالية لحماية بياناتك من الوصول غير المصرح به.\n\n6. حقوقك (القانون 08-09)\nبموجب القانون المغربي، لديك الحق في الوصول إلى بياناتك وتصحيحها أو طلب حذفها بعد انتهاء العقد.\n\n8. اتصل بنا\nمراكش، المغرب | واتساب: 400 511 608 212+ | بريد إلكتروني: manaralogistici@gmail.com | العنوان: Azli rue ibn batota marrakech`
      },
      terms: {
        title: 'شروط الخدمة',
        content: `شروط الخدمة: منارة لوجيستيكس\nآخر تحديث: يناير 2026\n\n1. قبول الشروط\nمن خلال الشراكة مع منارة لوجيستيكس، يوافق التجار على الالتزام بهذه الشروط. شعارنا "ثقتكم، شحنتكم" هو أساس شراكتنا.\n\n2. نطاق الخدمة\nتقدم منارة لوجيستيكس خدمات توصيل التجارة الإلكترونية داخل مراكش والمناطق المحيطة بها، بما في ذلك:\n- استلام البضائع من العميل.\n- توصيل الميل الأخير للعميل النهائي.\n- تحصيل مدفوعات الدفع عند الاستلام (COD).\n\n3. مسؤوليات التاجر\nالعميل مسؤول عن:\n- تقديم أسماء العملاء وعناوينهم وأرقام هواتفهم بدقة.\n- ضمان تغليف المنتجات بشكل آمن للنقل.\n- التصريح عن أي مواد قابلة للكسر أو ذات قيمة عالية قبل الشحن.\n\n4. الدفع عند الاستلام والمدفوعات\n- التحصيل: نجمع المبلغ المحدد بالضبط من قبل العميل في فاتورة التوصيل.\n- التحويل: سيتم تحويل المبالغ المحصلة إلى العميل في غضون 24 إلى 48 ساعة بعد التوصيل الناجح.\n- رسوم الخدمة: سيتم خصم رسوم التوصيل الخاصة بنا من النقد المحصل أو فوترتها أسبوعياً.\n\n5. محاولات التوصيل والمرتجعات\n- نقوم بما يصل إلى 3 محاولات للاتصال بالعميل النهائي.\n- إذا رفض العميل الطرد أو تعذر الوصول إليه، فسيتم إرجاع العنصر إلى العميل.\n- قد يتم تطبيق رسوم إرجاع للطرود المرفوضة.\n\n6. المواد المحظورة\nلا تقوم منارة لوجيستيكس بتوصيل المواد غير القانونية أو الخطرة أو المواد المحظورة بموجب القانون المغربي.\n\n7. المسؤولية والتأمين\n- منارة لوجيستيكس مسؤولة عن فقدان أو تلف الطرود أثناء وجودها في حوزتنا، بحد أقصى 500 درهم ما لم يتم التصريح بقيمة أعلى والتأمين عليها.\n- نحن لسنا مسؤولين عن الأعطال الإلكترونية الداخلية أو الأضرار التي تلحق بالعناصر التي لم يتم تغليفها بشكل صحيح من قبل العميل.\n\n8. التأخيرات\nبينما نسعى جاهدين للتوصيل خلال 24 ساعة في مراكش، فإن منارة لوجيستيكس ليست مسؤولة عن التأخيرات الناجمة عن "القوة القاهرة".\n\n9. الإنهاء\nيجوز لأي من الطرفين إنهاء الشراكة بإشعار كتابي مدته 7 أيام.\n\n10. القانون الحاكم\nتخضع هذه الشروط لقوانين المملكة المغربية. يتم تسوية أي نزاعات من قبل محاكم مراكش.`
      }
    }
  }
};
