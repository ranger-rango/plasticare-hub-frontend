export const plasticareProcedures : any[] = [
  {
    id: '1',
    name: 'Rhinoplasty',
    category: 'facial',
    description: 'Surgical reshaping of the nose to improve appearance and function',
    detailedDescription: `Rhinoplasty, commonly known as a nose job, is one of the most popular facial plastic surgery procedures. This transformative surgery can address both aesthetic concerns and functional issues, creating harmony between your nose and other facial features.\n\nOur expert surgeons use advanced techniques to reshape the nasal structure, whether you're looking to refine the tip, reduce a dorsal hump, narrow the bridge, or correct breathing difficulties. The procedure is highly customizable to your unique facial anatomy and aesthetic goals.\n\nUsing state-of-the-art 3D imaging technology, we can preview potential results before surgery, ensuring you have realistic expectations and are completely satisfied with your planned outcome.`,
    bodyArea: 'nose',
    recoveryTime: '1-2 weeks',
    priceRange: '$7,000 - $15,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18173ba4a-1764929356249.png",
    alt: 'Close-up profile view of woman with elegant nose structure in soft natural lighting',
    benefits: [
    'Improved facial harmony and proportion',
    'Enhanced self-confidence',
    'Better breathing function',
    'Correction of birth defects or injury',
    'Natural-looking results',
    'Long-lasting transformation'],

    idealCandidates: [
    'Adults with fully developed facial structure',
    'Non-smokers or willing to quit',
    'Realistic expectations about outcomes',
    'Good overall physical health',
    'Desire to improve nose appearance or function',
    'Stable mental and emotional health'],

    beforeAfterImages: [
    {
      id: 'ba1',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10e48aa41-1765003959157.png",
      beforeAlt: 'Profile view of woman before rhinoplasty showing prominent nasal bridge',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f79f1cdf-1765003959007.png",
      afterAlt: 'Profile view of same woman after rhinoplasty with refined nasal contour',
      timeframe: '6 months post-op',
      procedureName: 'Rhinoplasty'
    },
    {
      id: 'ba2',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1b702fdcd-1765003959139.png",
      beforeAlt: 'Front view of woman before rhinoplasty with wide nasal bridge',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10adc6e47-1765003961143.png",
      afterAlt: 'Front view of same woman after rhinoplasty with narrower refined nose',
      timeframe: '1 year post-op',
      procedureName: 'Rhinoplasty'
    }],

    faqs: [
    {
      id: 'faq1',
      question: 'How long does rhinoplasty recovery take?',
      answer: 'Initial recovery typically takes 1-2 weeks, with most swelling subsiding within 2-3 weeks. However, final results may take up to a year to fully develop as residual swelling gradually resolves. Most patients return to work within 7-10 days and can resume exercise after 3-4 weeks.'
    },
    {
      id: 'faq2',
      question: 'Will rhinoplasty leave visible scars?',
      answer: 'For closed rhinoplasty, all incisions are made inside the nose, leaving no visible scars. Open rhinoplasty involves a small incision on the columella (the tissue between nostrils), which typically heals to an imperceptible fine line. Our surgeons use meticulous techniques to minimize scarring.'
    },
    {
      id: 'faq3',
      question: 'Can rhinoplasty improve breathing problems?',
      answer: 'Yes, functional rhinoplasty can correct structural issues like a deviated septum, enlarged turbinates, or collapsed nasal valves that impair breathing. Many patients combine functional and cosmetic improvements in a single procedure for optimal results.'
    }],

    relatedProcedures: ['2', '3', '4']
  },
  {
    id: '2',
    name: 'Breast Augmentation',
    category: 'breast',
    description: 'Enhance breast size and shape with implants or fat transfer',
    detailedDescription: `Breast augmentation is one of the most sought-after cosmetic procedures, designed to enhance breast size, improve symmetry, and restore volume lost due to pregnancy, weight loss, or aging.\n\nOur board-certified surgeons offer multiple approaches including saline implants, silicone gel implants, and natural fat transfer techniques. During your consultation, we'll discuss implant types, sizes, placement options, and incision locations to achieve your desired aesthetic while maintaining natural-looking results.\n\nUsing advanced 3D imaging technology, you can visualize potential outcomes and make informed decisions about your transformation. We prioritize safety, natural aesthetics, and long-term satisfaction in every procedure.`,
    bodyArea: 'breast',
    recoveryTime: '1-2 weeks',
    priceRange: '$6,000 - $12,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd99ffad-1764650957024.png",
    alt: 'Elegant woman in white dress showing natural feminine silhouette in soft studio lighting',
    benefits: [
    'Enhanced breast volume and fullness',
    'Improved body proportion and symmetry',
    'Restored breast shape after pregnancy',
    'Increased clothing options and fit',
    'Boosted self-confidence',
    'Natural-looking results'],

    idealCandidates: [
    'Women seeking larger breast size',
    'Those with asymmetrical breasts',
    'Post-pregnancy volume loss',
    'Good overall health',
    'Realistic expectations',
    'Non-smokers or willing to quit'],

    beforeAfterImages: [
    {
      id: 'ba3',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_2933c408a-1765003964134.png",
      beforeAlt: 'Front view of woman before breast augmentation showing smaller breast volume',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1377f8f0b-1764658636109.png",
      afterAlt: 'Front view of same woman after breast augmentation with enhanced fullness',
      timeframe: '3 months post-op',
      procedureName: 'Breast Augmentation'
    }],

    faqs: [
    {
      id: 'faq4',
      question: 'How do I choose the right implant size?',
      answer: 'Implant selection involves considering your body frame, chest width, existing breast tissue, and aesthetic goals. We use 3D imaging and sizing tools during consultation to help you visualize different options. Our surgeons provide expert guidance to ensure proportionate, natural-looking results.'
    },
    {
      id: 'faq5',
      question: 'How long do breast implants last?',
      answer: 'Modern breast implants are designed to be long-lasting, but they are not considered lifetime devices. Most patients enjoy their results for 10-20 years before considering replacement. Regular monitoring and follow-up appointments help ensure implant integrity and optimal results.'
    }],

    relatedProcedures: ['5', '6', '7']
  },
  {
    id: '3',
    name: 'Liposuction',
    category: 'body',
    description: 'Remove stubborn fat deposits and contour your body',
    detailedDescription: `Liposuction is a body contouring procedure that removes stubborn fat deposits resistant to diet and exercise. This versatile treatment can target multiple areas including the abdomen, thighs, hips, arms, back, and neck.\n\nUsing advanced techniques like tumescent liposuction, ultrasound-assisted liposuction (UAL), and laser-assisted liposuction (LAL), our surgeons precisely sculpt your body contours while minimizing downtime and maximizing results.\n\nLiposuction is not a weight-loss solution but rather a body sculpting tool for patients near their ideal weight who want to eliminate localized fat pockets and achieve better body proportions.`,
    bodyArea: 'body',
    recoveryTime: '1-2 weeks',
    priceRange: '$3,000 - $10,000',
    duration: '1-4 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png",
    alt: 'Fit woman in athletic wear showing toned body contours in bright fitness studio',
    benefits: [
    'Targeted fat removal',
    'Improved body contours',
    'Enhanced muscle definition',
    'Permanent fat cell removal',
    'Minimal scarring',
    'Versatile treatment areas'],

    idealCandidates: [
    'Near ideal body weight',
    'Good skin elasticity',
    'Localized fat deposits',
    'Healthy lifestyle commitment',
    'Realistic expectations',
    'Non-smokers'],

    beforeAfterImages: [
    {
      id: 'ba4',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
      beforeAlt: 'Side view of woman before liposuction showing abdominal fat deposits',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_140df08ed-1765003957858.png",
      afterAlt: 'Side view of same woman after liposuction with contoured flat abdomen',
      timeframe: '4 months post-op',
      procedureName: 'Liposuction'
    }],

    faqs: [
    {
      id: 'faq6',
      question: 'Is liposuction a weight loss procedure?',
      answer: 'No, liposuction is a body contouring procedure, not a weight loss solution. It is designed to remove localized fat deposits and improve body proportions in patients who are already near their ideal weight. Maintaining a healthy lifestyle is essential for long-lasting results.'
    },
    {
      id: 'faq7',
      question: 'Will the fat come back after liposuction?',
      answer: 'Liposuction permanently removes fat cells from treated areas. However, remaining fat cells can still expand with weight gain. Maintaining a stable weight through diet and exercise ensures long-lasting results and prevents fat accumulation in untreated areas.'
    }],

    relatedProcedures: ['8', '9', '10']
  },
  {
    id: '4',
    name: 'Facelift',
    category: 'facial',
    description: 'Restore youthful facial contours and reduce signs of aging',
    detailedDescription: `A facelift, or rhytidectomy, is a comprehensive facial rejuvenation procedure that addresses multiple signs of aging including sagging skin, deep creases, jowls, and loss of facial volume.\n\nOur surgeons use advanced techniques including SMAS (superficial musculoaponeurotic system) lifting, deep plane facelifts, and mini facelifts to achieve natural-looking results tailored to your unique facial anatomy and aging patterns.\n\nCombining a facelift with complementary procedures like neck lift, eyelid surgery, or fat grafting can provide comprehensive facial rejuvenation for a refreshed, youthful appearance that looks naturally you.`,
    bodyArea: 'face',
    recoveryTime: '2-3 weeks',
    priceRange: '$12,000 - $25,000',
    duration: '3-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
    alt: 'Mature elegant woman with smooth facial skin and defined jawline in natural lighting',
    benefits: [
    'Reduced facial sagging and wrinkles',
    'Restored facial contours',
    'Improved jawline definition',
    'Natural-looking rejuvenation',
    'Long-lasting results',
    'Enhanced self-confidence'],

    idealCandidates: [
    'Moderate to severe facial aging',
    'Good skin elasticity',
    'Realistic expectations',
    'Good overall health',
    'Non-smokers',
    'Stable weight'],

    beforeAfterImages: [
    {
      id: 'ba5',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f51273f1-1764644109751.png",
      beforeAlt: 'Profile view of mature woman before facelift showing facial sagging and jowls',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14f312e9d-1764742602630.png",
      afterAlt: 'Profile view of same woman after facelift with lifted contours and defined jawline',
      timeframe: '6 months post-op',
      procedureName: 'Facelift'
    }],

    faqs: [
    {
      id: 'faq8',
      question: 'How long do facelift results last?',
      answer: 'Facelift results typically last 10-15 years, though individual results vary based on genetics, lifestyle, and skin care. While the aging process continues, most patients maintain a more youthful appearance than if they had not undergone surgery. Complementary treatments can help extend results.'
    },
    {
      id: 'faq9',
      question: 'Will a facelift look natural?',
      answer: 'Modern facelift techniques focus on natural-looking results that refresh your appearance without creating an "overdone" look. Our surgeons use advanced methods that preserve your unique facial characteristics while addressing aging concerns, ensuring you look like a rejuvenated version of yourself.'
    }],

    relatedProcedures: ['11', '12', '13']
  },
  {
    id: '5',
    name: 'Botox Injections',
    category: 'non-surgical',
    description: 'Smooth wrinkles and fine lines with injectable treatments',
    detailedDescription: `Botox is the most popular non-surgical cosmetic treatment worldwide, offering a quick, effective solution for reducing dynamic wrinkles caused by facial expressions.\n\nThis FDA-approved injectable temporarily relaxes targeted facial muscles, smoothing forehead lines, crow's feet, frown lines, and other expression-related wrinkles. Results appear within 3-7 days and last 3-4 months.\n\nOur experienced injectors use precise techniques to achieve natural-looking results that maintain your facial expressiveness while reducing unwanted lines. Botox can also be used preventatively to slow the formation of new wrinkles.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$300 - $800',
    duration: '15-30 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af1fbb3e-1764644110177.png",
    alt: 'Close-up of woman receiving facial injection treatment with smooth wrinkle-free skin',
    benefits: [
    'Reduced wrinkles and fine lines',
    'No downtime required',
    'Quick treatment sessions',
    'Natural-looking results',
    'Preventative anti-aging',
    'Minimal discomfort'],

    idealCandidates: [
    'Adults with dynamic wrinkles',
    'Good overall health',
    'Realistic expectations',
    'Not pregnant or breastfeeding',
    'No neuromuscular disorders',
    'Desire for non-surgical treatment'],

    beforeAfterImages: [
    {
      id: 'ba6',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e9c231e-1764676129036.png",
      beforeAlt: 'Close-up of woman before Botox showing forehead wrinkles and frown lines',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
      afterAlt: 'Close-up of same woman after Botox with smooth forehead and reduced lines',
      timeframe: '2 weeks post-treatment',
      procedureName: 'Botox'
    }],

    faqs: [
    {
      id: 'faq10',
      question: 'How long does Botox last?',
      answer: 'Botox results typically last 3-4 months, though individual duration varies based on metabolism, muscle strength, and treatment area. Regular maintenance treatments help sustain results and may extend duration over time as muscles become trained to relax.'
    },
    {
      id: 'faq11',
      question: 'Is Botox safe?',
      answer: 'Yes, Botox has an excellent safety profile with over 20 years of clinical use and FDA approval. When administered by qualified professionals, side effects are minimal and temporary. Common effects include mild bruising or swelling at injection sites, which resolve quickly.'
    }],

    relatedProcedures: ['14', '15', '16']
  },
  {
    id: '6',
    name: 'Tummy Tuck',
    category: 'body',
    description: 'Remove excess skin and tighten abdominal muscles',
    detailedDescription: `Abdominoplasty, commonly known as a tummy tuck, is a transformative body contouring procedure that removes excess skin and fat from the abdomen while tightening weakened or separated abdominal muscles.\n\nThis procedure is ideal for patients who have experienced significant weight loss, pregnancy, or aging-related changes that have left them with loose, sagging abdominal skin and weakened core muscles that don't respond to diet and exercise.\n\nOur surgeons offer various techniques including full abdominoplasty, mini tummy tuck, and extended tummy tuck to address your specific concerns and achieve a flatter, firmer, more toned abdominal profile.`,
    bodyArea: 'abdomen',
    recoveryTime: '2-4 weeks',
    priceRange: '$8,000 - $15,000',
    duration: '2-5 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png",
    alt: 'Woman in fitness attire showing toned flat abdomen and defined waistline',
    benefits: [
    'Flatter, firmer abdomen',
    'Tightened abdominal muscles',
    'Improved body contours',
    'Reduced stretch marks',
    'Enhanced clothing fit',
    'Boosted self-confidence'],

    idealCandidates: [
    'Excess abdominal skin',
    'Weakened abdominal muscles',
    'Completed childbearing',
    'Stable weight',
    'Good overall health',
    'Non-smokers'],

    beforeAfterImages: [
    {
      id: 'ba7',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1788da110-1765003959100.png",
      beforeAlt: 'Front view of woman before tummy tuck showing loose abdominal skin',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11127e061-1764656058817.png",
      afterAlt: 'Front view of same woman after tummy tuck with flat toned abdomen',
      timeframe: '6 months post-op',
      procedureName: 'Tummy Tuck'
    }],

    faqs: [
    {
      id: 'faq12',
      question: 'Can I have more children after a tummy tuck?',
      answer: 'While it is possible to have children after a tummy tuck, pregnancy can compromise your results by stretching the abdominal skin and muscles again. We recommend completing your family before undergoing abdominoplasty to ensure long-lasting results.'
    },
    {
      id: 'faq13',
      question: 'Will a tummy tuck help me lose weight?',
      answer: 'A tummy tuck is not a weight loss procedure but rather a body contouring surgery. While you will lose some weight from removed skin and fat, the primary goal is to create a flatter, more toned abdominal profile. Ideal candidates are at or near their goal weight.'
    }],

    relatedProcedures: ['3', '17', '18']
  },
  {
    id: '7',
    name: 'Eyelid Surgery',
    category: 'facial',
    description: 'Rejuvenate tired-looking eyes and improve vision',
    detailedDescription: `Blepharoplasty, or eyelid surgery, addresses aging-related changes around the eyes including drooping upper lids, puffy lower lids, and under-eye bags that can make you look tired, aged, or even impair vision.\n\nThis delicate procedure removes excess skin, muscle, and fat from the upper and/or lower eyelids, creating a more alert, youthful, and refreshed appearance. Upper blepharoplasty can also improve peripheral vision obstructed by sagging eyelids.\n\nOur surgeons use meticulous techniques to achieve natural-looking results that enhance your eyes while preserving your unique characteristics and avoiding an "overdone" appearance.`,
    bodyArea: 'eyes',
    recoveryTime: '1-2 weeks',
    priceRange: '$4,000 - $8,000',
    duration: '1-3 hours',
    anesthesia: 'Local or General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13815544d-1764675675715.png",
    alt: 'Close-up of woman with bright alert eyes and smooth eyelid contours',
    benefits: [
    'More youthful eye appearance',
    'Reduced puffiness and bags',
    'Improved vision (upper lids)',
    'Natural-looking results',
    'Long-lasting effects',
    'Enhanced facial harmony'],

    idealCandidates: [
    'Drooping or sagging eyelids',
    'Under-eye bags or puffiness',
    'Good overall health',
    'Realistic expectations',
    'Non-smokers',
    'No serious eye conditions'],

    beforeAfterImages: [
    {
      id: 'ba8',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_144580766-1765003959564.png",
      beforeAlt: 'Close-up of woman before eyelid surgery showing drooping upper lids and under-eye bags',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd154b95-1764811120508.png",
      afterAlt: 'Close-up of same woman after eyelid surgery with lifted lids and reduced puffiness',
      timeframe: '3 months post-op',
      procedureName: 'Eyelid Surgery'
    }],

    faqs: [
    {
      id: 'faq14',
      question: 'Will eyelid surgery leave visible scars?',
      answer: 'Incisions are strategically placed in the natural creases of the eyelids, making scars virtually invisible once healed. Our surgeons use precise techniques and fine sutures to minimize scarring. Most scars fade significantly within a few months and become imperceptible.'
    },
    {
      id: 'faq15',
      question: 'Can eyelid surgery improve my vision?',
      answer: 'Yes, upper blepharoplasty can improve peripheral vision when drooping eyelids obstruct your field of view. Many patients experience functional improvements along with aesthetic enhancement. In some cases, insurance may cover the procedure if vision impairment is documented.'
    }],

    relatedProcedures: ['4', '19', '20']
  },
  {
    id: '8',
    name: 'Dermal Fillers',
    category: 'non-surgical',
    description: 'Restore volume and smooth wrinkles with injectable fillers',
    detailedDescription: `Dermal fillers are injectable treatments that restore lost facial volume, smooth wrinkles, and enhance facial contours for a more youthful appearance.\n\nWe offer a comprehensive range of FDA-approved fillers including hyaluronic acid-based products (Juvederm, Restylane), calcium hydroxylapatite (Radiesse), and poly-L-lactic acid (Sculptra) to address various aging concerns.\n\nFillers can enhance lips, cheeks, and chin, fill nasolabial folds and marionette lines, smooth under-eye hollows, and restore hand volume. Results are immediate and can last from 6 months to 2 years depending on the product and treatment area.`,
    bodyArea: 'face',
    recoveryTime: 'None',
    priceRange: '$600 - $2,000',
    duration: '30-60 minutes',
    anesthesia: 'None',
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1730719542530-0916358d5c26",
    alt: 'Woman receiving facial filler injection treatment with smooth plump skin',
    benefits: [
    'Immediate volume restoration',
    'Smooth wrinkles and folds',
    'Enhanced facial contours',
    'No downtime required',
    'Natural-looking results',
    'Reversible treatments'],

    idealCandidates: [
    'Volume loss or wrinkles',
    'Good overall health',
    'Realistic expectations',
    'Not pregnant or breastfeeding',
    'No active skin infections',
    'Desire for non-surgical treatment'],

    beforeAfterImages: [
    {
      id: 'ba9',
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffe498e9-1764663240453.png",
      beforeAlt: 'Close-up of woman before dermal fillers showing nasolabial folds and volume loss',
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_118c32215-1764669220074.png",
      afterAlt: 'Close-up of same woman after dermal fillers with restored volume and smooth contours',
      timeframe: 'Immediately post-treatment',
      procedureName: 'Dermal Fillers'
    }],

    faqs: [
    {
      id: 'faq16',
      question: 'How long do dermal fillers last?',
      answer: 'Filler longevity varies by product type and treatment area. Hyaluronic acid fillers typically last 6-18 months, while longer-lasting options like Sculptra can provide results for up to 2 years. Factors like metabolism, lifestyle, and injection technique affect duration.'
    },
    {
      id: 'faq17',
      question: 'Are dermal fillers safe?',
      answer: 'Yes, FDA-approved dermal fillers have excellent safety profiles when administered by qualified professionals. Side effects are typically mild and temporary, including swelling, bruising, or redness at injection sites. Hyaluronic acid fillers can be dissolved if needed.'
    }],

    relatedProcedures: ['5', '21', '22']
  },
  {
    id: '9',
    name: 'Otoplasty',
    category: 'facial',
    description: 'Change the shape, position, or size of the ears',
    detailedDescription: `Otoplasty is a procedure to change the shape, position or size of the ears. It is most commonly performed to pin back protruding ears.`,
    bodyArea: 'ears',
    recoveryTime: '1 week',
    priceRange: '$4,000 - $7,000',
    duration: '1-2 hours',
    anesthesia: 'Local or General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18173ba4a-1764929356249.png", // Reusing facial asset
    alt: 'Ear contouring results',
    benefits: ['Corrects protrusion', 'Improved symmetry'],
    idealCandidates: ['Children over 5', 'Protruding ears'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['4']
  },
  {
    id: '10',
    name: 'Fat Grafting',
    category: 'facial',
    description: 'Volume restoration using the patient\'s own fat cells',
    detailedDescription: `Using your own fat to restore volume to cheeks, under-eyes, or temples for a natural rejuvenation.`,
    bodyArea: 'face',
    recoveryTime: '1 week',
    priceRange: '$4,000 - $8,000',
    duration: '1-2 hours',
    anesthesia: 'Local with sedation',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png", // Reusing mature skin asset
    alt: 'Youthful volume restoration',
    benefits: ['Natural tissue', 'Long-lasting', 'No allergy risk'],
    idealCandidates: ['Volume loss', 'Available donor fat'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['4', '11']
  },
  {
    id: '11',
    name: 'Nano-Fat Grafting',
    category: 'facial',
    description: 'Skin rejuvenation and hyperpigmentation correction',
    detailedDescription: `A specialized fat injection technique that focuses on skin quality and discoloration rather than volume.`,
    bodyArea: 'skin',
    recoveryTime: '1 week',
    priceRange: '$3,500 - $6,500',
    duration: '1-2 hours',
    anesthesia: 'Local',
    isPopular: false,
    isNew: true,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af1fbb3e-1764644110177.png", // Reusing skin treatment asset
    alt: 'Skin texture improvement',
    benefits: ['Corrects discoloration', 'Smooths skin'],
    idealCandidates: ['Hyperpigmentation', 'Aging skin'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['10']
  },
  {
    id: '12',
    name: 'Chin Advancement',
    category: 'facial',
    description: 'Surgically alter a weak chin for a balanced profile',
    detailedDescription: `Permanent surgical advancement of the chin bone to improve the jawline and profile.`,
    bodyArea: 'jaw',
    recoveryTime: '2 weeks',
    priceRange: '$5,000 - $10,000',
    duration: '1-2 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f51273f1-1764644109751.png", // Reusing profile asset
    alt: 'Stronger jawline profile',
    benefits: ['Balanced profile', 'Permanent'],
    idealCandidates: ['Weak chin'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['1']
  },
  {
    id: '13',
    name: 'Dimpleplasty',
    category: 'facial',
    description: 'Create natural-looking dimples on the cheeks or chin',
    detailedDescription: `A minimally invasive procedure to create lasting dimples when smiling.`,
    bodyArea: 'cheeks',
    recoveryTime: '2-5 days',
    priceRange: '$2,500 - $5,000',
    duration: '30-60 minutes',
    anesthesia: 'Local',
    isPopular: false,
    isNew: true,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13815544d-1764675675715.png", // Reusing facial close-up
    alt: 'Cheek dimple creation',
    benefits: ['Quick procedure', 'Permanent'],
    idealCandidates: ['Desired facial dimples'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['4']
  },
  {
    id: '14',
    name: 'Mini-Tummy Tuck',
    category: 'body',
    description: 'Targeted fat removal and muscle tightening with less skin removal',
    detailedDescription: `A less invasive version of the abdominoplasty focusing on the lower belly area.`,
    bodyArea: 'abdomen',
    recoveryTime: '1-2 weeks',
    priceRange: '$5,000 - $9,000',
    duration: '1.5-2 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11127e061-1764656058817.png", // Reusing abdomen asset
    alt: 'Lower abdomen contour',
    benefits: ['Small scar', 'Fast recovery'],
    idealCandidates: ['Mild skin laxity'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['6']
  },
  {
    id: '15',
    name: 'Brachioplasty (Arm Lift)',
    category: 'body',
    description: 'Improve the contour of upper arms by removing excess skin',
    detailedDescription: `Removal of "bat wings" or loose skin from the upper arms.`,
    bodyArea: 'arms',
    recoveryTime: '1 week',
    priceRange: '$6,000 - $10,000',
    duration: '2 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png", // Reusing body asset
    alt: 'Toned upper arms',
    benefits: ['Firmer arms', 'Removes loose skin'],
    idealCandidates: ['Sagging arm skin'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['16']
  },
  {
    id: '16',
    name: 'Thigh Lift',
    category: 'body',
    description: 'Improve the contour of the upper thigh',
    detailedDescription: `Surgical skin removal to tighten and smooth the inner or outer thighs.`,
    bodyArea: 'thighs',
    recoveryTime: '2 weeks',
    priceRange: '$8,000 - $13,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png", // Reusing body asset
    alt: 'Tightened thigh skin',
    benefits: ['Reduced chafing', 'Smoother legs'],
    idealCandidates: ['Skin laxity in thighs'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['15']
  },
  {
    id: '17',
    name: 'Body Contouring',
    category: 'body',
    description: 'Comprehensive skin removal after major weight loss',
    detailedDescription: `A staged approach to removing excess skin from the entire body after massive weight loss.`,
    bodyArea: 'full body',
    recoveryTime: '4-6 weeks',
    priceRange: 'Varies',
    duration: '4-8 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png", // Reusing full body asset
    alt: 'Post-weight loss transformation',
    benefits: ['Restores mobility', 'Finalizes weight loss'],
    idealCandidates: ['Stable weight post-bariatric'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['6', '15', '16']
  },
  {
    id: '18',
    name: 'Breast Lift',
    category: 'breast',
    description: 'Reshape and lift drooping breasts to a higher position',
    detailedDescription: `Corrects sagging by repositioning the nipple and removing excess skin.`,
    bodyArea: 'breast',
    recoveryTime: '2 weeks',
    priceRange: '$7,000 - $12,000',
    duration: '2-3 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1377f8f0b-1764658636109.png", // Reusing breast asset
    alt: 'Lifted breast shape',
    benefits: ['Youthful lift', 'Corrects sagging'],
    idealCandidates: ['Ptosis (drooping)'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['2', '19']
  },
  {
    id: '19',
    name: 'Breast Reduction',
    category: 'breast',
    description: 'Reduce the size and weight of heavy breasts',
    detailedDescription: `Removal of tissue to alleviate back pain and improve proportions.`,
    bodyArea: 'breast',
    recoveryTime: '2-3 weeks',
    priceRange: '$8,000 - $14,000',
    duration: '3 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_2933c408a-1765003964134.png", // Reusing breast asset
    alt: 'Smaller breast size',
    benefits: ['Pain relief', 'Better posture'],
    idealCandidates: ['Heavy, large breasts'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['18']
  },
  {
    id: '20',
    name: 'Buttock Augmentation (BBL)',
    category: 'body',
    description: 'Improve the projection and volume of the buttocks',
    detailedDescription: `Volume enhancement using fat transfer for a natural lift and shape.`,
    bodyArea: 'buttocks',
    recoveryTime: '2-4 weeks',
    priceRange: '$7,000 - $15,000',
    duration: '2-4 hours',
    anesthesia: 'General',
    isPopular: true,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png", // Reusing curve asset
    alt: 'Enhanced buttock volume',
    benefits: ['Improved S-curve', 'Natural feel'],
    idealCandidates: ['Lack of projection'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['3']
  },
  {
    id: '21',
    name: 'Calf Augmentation',
    category: 'body',
    description: 'Improve the projection and volume of the calves',
    detailedDescription: `Implants placed behind the knee to create muscular-looking lower legs.`,
    bodyArea: 'calves',
    recoveryTime: '2 weeks',
    priceRange: '$5,000 - $9,000',
    duration: '1.5 hours',
    anesthesia: 'General',
    isPopular: false,
    isNew: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb1f2025-1764906558706.png", // Reusing body asset
    alt: 'Defined calf muscles',
    benefits: ['Definition', 'Permanent volume'],
    idealCandidates: ['Thin calves'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: ['3']
  },
  {
    id: '22',
    name: 'Hair Transplantation',
    category: 'facial',
    description: 'Restore natural hair to balding or thinning areas',
    detailedDescription: `Moving permanent follicles from a donor area to thinning regions.`,
    bodyArea: 'scalp',
    recoveryTime: '1 week',
    priceRange: '$5,000 - $15,000',
    duration: '4-8 hours',
    anesthesia: 'Local',
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1730719542530-0916358d5c26", // Reusing clinic asset
    alt: 'Hair restoration results',
    benefits: ['Permanent growth', 'Natural hairline'],
    idealCandidates: ['Thinning hair'],
    beforeAfterImages: [],
    faqs: [],
    relatedProcedures: []
  }
];