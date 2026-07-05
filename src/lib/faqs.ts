export interface FAQ {
  slug: string;
  title: string;
  excerpt: string;
  content: FAQSection[];
  keyTakeaways: string[];
}

export interface FAQSection {
  heading: string;
  body: string[];
}

export const FAQS: FAQ[] = [
  {
    slug: "will-medicare-cover-my-procedure",
    title: "Will Medicare Cover My Procedure?",
    excerpt:
      "One of the most common questions we hear is whether Medicare will pay for a specific surgery, test, or treatment. Here's how to find out before your appointment.",
    keyTakeaways: [
      "Medicare covers services that are deemed \"medically necessary\" by your doctor.",
      "Your doctor must accept Medicare assignment for your costs to be predictable.",
      "Always confirm coverage before your procedure to avoid surprise bills.",
    ],
    content: [
      {
        heading: "How Medicare Decides What It Covers",
        body: [
          "Medicare uses the phrase \"medically necessary\" to describe the services it will pay for. In practice, this means your doctor must document that the service is required to diagnose or treat a specific medical condition — not simply that it would be beneficial or convenient.",
          "Coverage decisions are made based on Medicare's national coverage determinations (NCDs) and local coverage determinations (LCDs) set by the regional Medicare contractor in your area. These policies define which procedures, tests, and treatments are approved — and under what circumstances.",
        ],
      },
      {
        heading: "Does Your Doctor Accept Medicare?",
        body: [
          "Before worrying about whether Medicare covers a procedure, confirm that your doctor accepts Medicare assignment. A provider who \"accepts assignment\" agrees to Medicare's approved amount as payment in full — meaning you pay only your share (typically 20% under Original Medicare).",
          "If your doctor is a non-participating provider, they may charge up to 15% more than Medicare's approved amount — and you'd owe that difference out of pocket. If your doctor has opted out of Medicare entirely, Medicare will not pay anything toward the service.",
        ],
      },
      {
        heading: "What About Preventive Services?",
        body: [
          "Many preventive screenings — like mammograms, colonoscopies, and annual wellness visits — are covered by Medicare at no cost to you when performed by a Medicare-accepting provider. The key is that the visit must be billed as preventive, not diagnostic.",
          "If your doctor discovers a problem during what was scheduled as a preventive visit and pivots to treating it, the visit may be reclassified as diagnostic — and your normal cost-sharing may apply. This surprises many beneficiaries, so it's worth asking your doctor how the visit will be billed.",
        ],
      },
      {
        heading: "When in Doubt, Ask Before Your Appointment",
        body: [
          "The safest approach is to call Medicare at 1-800-MEDICARE or visit Medicare.gov before your procedure to verify coverage. You can also ask your doctor's billing office to submit a prior authorization request if your specific situation is unclear.",
          "Working with an independent Medicare broker can also help. We help our clients navigate coverage questions like this every day — at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-from-your-welcome-to-medicare-visit",
    title: "What to Expect from Your Welcome to Medicare Visit",
    excerpt:
      "When you're new to Medicare, you're entitled to a one-time preventive visit with your doctor. Here's what it covers — and why you shouldn't skip it.",
    keyTakeaways: [
      "The Welcome to Medicare visit is a one-time benefit available in your first 12 months of Part B.",
      "It is a preventive visit, not a sick visit — it focuses on your baseline health, not treatment.",
      "It's covered at no cost when your doctor accepts Medicare assignment.",
    ],
    content: [
      {
        heading: "What Is the Welcome to Medicare Visit?",
        body: [
          "When you first enroll in Medicare Part B, you're eligible for a one-time \"Welcome to Medicare\" preventive visit — sometimes called the Initial Preventive Physical Examination (IPPE). This visit must take place within the first 12 months of your Part B coverage beginning.",
          "Think of it as your Medicare baseline appointment. Your doctor will review your health history, check your current medications, take your vital signs, and discuss any risk factors or concerns that may need monitoring going forward.",
        ],
      },
      {
        heading: "What Does the Visit Include?",
        body: [
          "During this visit, your doctor will typically review your medical and family history, measure your height, weight, blood pressure, and body mass index, and assess your vision, hearing, and cognitive function. They may also screen for depression and discuss fall prevention strategies.",
          "Your doctor will use this time to create or update a written plan for any follow-up care, screenings, or referrals you may need. It's also a great opportunity to ask questions about what Medicare covers and what to expect as a new beneficiary.",
        ],
      },
      {
        heading: "Is It the Same as an Annual Physical?",
        body: [
          "No — and this is an important distinction. The Welcome to Medicare visit is a preventive screening visit, not a comprehensive physical exam. If you ask your doctor to address a specific health concern during the same appointment, that portion of the visit may be billed separately and subject to your Part B deductible and 20% coinsurance.",
          "After your first year on Medicare, the Welcome to Medicare visit is no longer available — but you become eligible for an Annual Wellness Visit (AWV) each year, which is a separate benefit also covered at no cost.",
        ],
      },
      {
        heading: "Do I Need to Pay for It?",
        body: [
          "If your doctor accepts Medicare assignment, the Welcome to Medicare visit is covered at 100% — meaning no deductible and no coinsurance. However, if additional services are performed or you have a secondary issue addressed during the same visit, you may owe cost-sharing for those additional services.",
          "We always recommend confirming with your doctor's office before the appointment how the visit will be billed, so there are no surprises on your explanation of benefits afterward.",
        ],
      },
    ],
  },
  {
    slug: "what-is-medigap",
    title: "What Is Medigap?",
    excerpt:
      "Original Medicare covers a lot — but it doesn't cover everything. Medigap plans are designed to fill those gaps. Here's how they work.",
    keyTakeaways: [
      "Medigap is private insurance that works alongside Original Medicare to cover your cost-sharing.",
      "You must have Medicare Parts A and B to be eligible for a Medigap plan.",
      "Medigap plans are standardized — the same letter plan offers the same benefits regardless of the carrier.",
    ],
    content: [
      {
        heading: "What Is Medigap?",
        body: [
          "Medigap — also called Medicare Supplement insurance — is private health insurance designed to help cover the out-of-pocket costs that Original Medicare (Parts A and B) leaves behind. These costs include deductibles, coinsurance, and copayments that can add up quickly if you have significant medical needs.",
          "Medigap plans are sold by private insurance companies, but they are federally standardized. That means if you choose a Plan G from one carrier versus another, the coverage is identical — the only difference is the monthly premium.",
        ],
      },
      {
        heading: "How Does Medigap Work?",
        body: [
          "When you receive a covered medical service, Medicare pays its portion first. Your Medigap plan then pays its share of the remaining cost — depending on which plan you have. For example, with a Plan G, Medicare pays 80% of an approved service, and Plan G pays the remaining 20%, leaving you with little to no out-of-pocket cost for covered services.",
          "This predictability is one of the biggest advantages of Medigap. Rather than facing unexpected bills, you know in advance exactly what your costs will be each month — your premium, plus any applicable deductible depending on the plan.",
        ],
      },
      {
        heading: "What Does Medigap Not Cover?",
        body: [
          "Medigap plans do not cover prescription drugs — you'll need a standalone Part D plan for that. They also do not cover dental, vision, hearing, or long-term care. If those benefits matter to you, a Medicare Advantage plan might be worth comparing.",
          "Medigap plans also cannot be used if you have Medicare Advantage (Part C). They are designed specifically to work alongside Original Medicare Parts A and B.",
        ],
      },
      {
        heading: "When Can I Enroll in a Medigap Plan?",
        body: [
          "Your best window to enroll is your Medigap Open Enrollment Period — the six-month window that begins the month you turn 65 and are enrolled in Part B. During this window, no insurance company can deny you coverage or charge you higher premiums due to health conditions.",
          "Outside of this window, you may still be able to apply for a Medigap plan, but in most states the insurer can ask health questions and deny you based on your medical history. This makes timing your enrollment correctly extremely important.",
        ],
      },
    ],
  },
  {
    slug: "what-is-medicare-plan-g",
    title: "What Is Medicare Plan G?",
    excerpt:
      "Medicare Plan G has become the most popular Medigap plan in the country. Here's what it covers, what it costs, and why so many people choose it.",
    keyTakeaways: [
      "Plan G covers nearly all Medicare cost-sharing except the Part B deductible ($283 in 2026).",
      "It is the most comprehensive Medigap plan available to new Medicare beneficiaries.",
      "Premiums vary by carrier, age, and location — shopping around can save you hundreds per year.",
    ],
    content: [
      {
        heading: "What Does Medicare Plan G Cover?",
        body: [
          "Medicare Supplement Plan G is one of the most comprehensive coverage options available. Once you've met the annual Part B deductible ($283 in 2026), Plan G pays 100% of the remaining Medicare-approved costs — including hospital stays, doctor visits, skilled nursing facility coinsurance, and even emergency care during foreign travel (up to plan limits).",
          "In practical terms, this means that after your Part B deductible, you typically owe nothing for covered services. There are no copays, no network restrictions, and no referrals required — you can see any doctor in the country who accepts Medicare.",
        ],
      },
      {
        heading: "How Is Plan G Different from Plan F?",
        body: [
          "Plan F was the \"gold standard\" Medigap plan for years because it covered the Part B deductible in addition to everything Plan G covers. However, Plan F was discontinued for new Medicare beneficiaries starting January 1, 2020. If you became eligible for Medicare on or after that date, Plan G is the most comprehensive plan available to you.",
          "For most people, Plan G ends up being the better financial choice even when Plan F is an option — because the premium savings on Plan G typically outweigh the cost of the Part B deductible.",
        ],
      },
      {
        heading: "Who Is Plan G Best For?",
        body: [
          "Plan G is an excellent fit for people who want predictable, comprehensive coverage and the freedom to see any Medicare-participating doctor or specialist without a referral. It's particularly well-suited for those who travel frequently, have multiple health conditions, or simply want the peace of mind that comes with knowing their major medical costs are covered.",
          "If you're budget-conscious and willing to accept some cost-sharing in exchange for lower premiums, a Plan N or high-deductible Plan G might be worth comparing.",
        ],
      },
      {
        heading: "How Much Does Plan G Cost?",
        body: [
          "Premiums vary significantly by insurance company, your age, your gender, and where you live. In South Florida, premiums for Plan G can range from around $100 to over $200 per month depending on these factors.",
          "Because all Plan G policies offer identical coverage, the only reason to pay more is if you're not shopping around. Working with an independent broker means we compare rates across every carrier we represent to find you the lowest price for the same coverage.",
        ],
      },
    ],
  },
  {
    slug: "can-i-change-my-supplement-plan-during-annual-enrollment",
    title: "Can I Change My Medicare Supplement Plan During Annual Enrollment?",
    excerpt:
      "Every fall, Medicare holds its Annual Enrollment Period. But does that apply to Medigap plans? The answer surprises most people.",
    keyTakeaways: [
      "The Annual Enrollment Period (AEP) applies to Part D and Medicare Advantage — not Medigap.",
      "You can apply to change your Medigap plan at any time of year, but health underwriting may be required.",
      "Your one-time Medigap Open Enrollment window — at age 65 — is your best chance to enroll without health questions.",
    ],
    content: [
      {
        heading: "What the Annual Enrollment Period Actually Covers",
        body: [
          "Every year from October 15 through December 7, Medicare holds the Annual Enrollment Period (AEP). During this time, you can switch Medicare Advantage plans, switch from Medicare Advantage back to Original Medicare, or change your Part D prescription drug plan. These changes take effect January 1 of the following year.",
          "What the AEP does NOT cover is Medicare Supplement (Medigap) plans. This is one of the most common misconceptions we hear from clients each fall.",
        ],
      },
      {
        heading: "When Can You Change Medigap Plans?",
        body: [
          "Unlike Part D and Medicare Advantage, Medigap plans are not tied to annual enrollment windows. You can apply to change your Medigap plan at any point during the year. However, outside of your initial six-month Open Enrollment Period, insurance companies in most states have the right to ask medical underwriting questions — and can deny your application or charge higher premiums based on your health history.",
          "If you're in good health and your Medigap premium has increased significantly, it may be worth shopping for a lower rate with a different carrier that offers the same plan letter.",
        ],
      },
      {
        heading: "Your One-Time Open Enrollment Window",
        body: [
          "When you first turn 65 and enroll in Medicare Part B, you receive a one-time six-month Medigap Open Enrollment Period. During this window, no insurance company can deny you a Medigap plan or charge you more due to pre-existing health conditions. This is the most important enrollment window you'll have for Medigap — and it's worth using wisely.",
          "Choosing the right carrier from the start — one with a strong track record of stable rate increases — can make a significant difference in what you pay over the course of your retirement.",
        ],
      },
      {
        heading: "Does Florida Have Any Exceptions?",
        body: [
          "Some states have special rules that allow beneficiaries to change Medigap plans without underwriting at certain times — such as on their policy anniversary. Florida is not one of those states, so in most cases, health underwriting will apply if you try to switch plans after your initial Open Enrollment Period.",
          "That said, there are special enrollment situations — like losing employer coverage — where guaranteed issue rights may apply. We can review your specific situation and let you know what options are available.",
        ],
      },
    ],
  },
  {
    slug: "does-medicare-cover-cataract-surgery",
    title: "Does Medicare Cover Cataract Surgery?",
    excerpt:
      "Cataracts are one of the most common conditions affecting Medicare beneficiaries. The good news is that Medicare does cover cataract surgery — here's what you need to know.",
    keyTakeaways: [
      "Medicare Part B covers cataract surgery when deemed medically necessary.",
      "Medicare also covers one pair of eyeglasses or contact lenses after surgery.",
      "Standard intraocular lenses are covered; upgraded lenses may cost extra.",
    ],
    content: [
      {
        heading: "Does Medicare Pay for Cataract Surgery?",
        body: [
          "Yes. Medicare Part B covers cataract surgery when your doctor determines it is medically necessary — meaning the cataract is significantly impairing your vision and affecting your daily life. Medicare will pay 80% of the Medicare-approved cost after you've met your Part B deductible. If you have a Medigap plan like Plan G, it covers the remaining 20%, leaving you with little to no out-of-pocket cost.",
          "The surgery is typically performed as an outpatient procedure, so Part B applies rather than Part A (which covers inpatient hospital stays).",
        ],
      },
      {
        heading: "Are Eyeglasses Covered After Surgery?",
        body: [
          "Ordinarily, Medicare does not cover routine eyeglasses or contact lenses. However, there is a one-time exception: after cataract surgery that involves implanting an intraocular lens, Medicare will cover one pair of eyeglasses or one set of contact lenses from any provider that accepts Medicare. The same 80/20 cost-sharing applies.",
          "This benefit applies once per eye — so if you have cataracts in both eyes and have surgery on each, you're entitled to glasses following each procedure.",
        ],
      },
      {
        heading: "What About Upgraded Lenses?",
        body: [
          "During cataract surgery, a standard intraocular lens (IOL) is implanted to replace the clouded natural lens. Medicare covers the cost of a standard monofocal IOL. However, if you opt for a premium lens — such as a multifocal or toric lens that corrects astigmatism or reduces dependence on reading glasses — you will be responsible for the additional upgrade cost, as Medicare considers those enhancements elective.",
          "Talk to your eye surgeon about the lens options available to you and what the out-of-pocket cost difference would be for any upgrades.",
        ],
      },
      {
        heading: "What If I Have Medicare Advantage?",
        body: [
          "If you're enrolled in a Medicare Advantage plan (Part C), cataract surgery is still covered because all Medicare Advantage plans must cover at minimum what Original Medicare covers. However, your cost-sharing, copays, and network restrictions will be determined by your specific plan. Always verify with your plan before scheduling surgery.",
        ],
      },
    ],
  },
  {
    slug: "does-medicare-cover-dental",
    title: "Does Medicare Cover Dental?",
    excerpt:
      "Dental costs are one of the biggest surprises for new Medicare enrollees. Here's the truth about what's covered — and what's not.",
    keyTakeaways: [
      "Original Medicare (Parts A and B) does not cover routine dental care.",
      "Some Medicare Advantage plans include dental benefits.",
      "Standalone dental insurance is available and may be worth considering.",
    ],
    content: [
      {
        heading: "What Original Medicare Does NOT Cover",
        body: [
          "One of the most common disappointments new Medicare beneficiaries face is discovering that Original Medicare — Parts A and B — does not cover routine dental care. This includes cleanings, X-rays, fillings, crowns, bridges, dentures, and tooth extractions when performed for dental health purposes.",
          "This has been a gap in Medicare coverage since the program's inception, and it catches many people off guard — especially those coming off employer health insurance that included dental benefits.",
        ],
      },
      {
        heading: "When Does Medicare Cover Dental Services?",
        body: [
          "There is a narrow exception: Medicare Part A will cover dental services that are incidental to a covered medical procedure. For example, if you need a dental exam and clearance before a heart valve surgery or an organ transplant, those specific dental costs may be covered as part of the hospital stay.",
          "Similarly, if you require emergency care in a hospital setting due to a dental injury or infection, the hospital costs may be covered by Part A — but the dental procedure itself typically would not be.",
        ],
      },
      {
        heading: "Do Medicare Advantage Plans Cover Dental?",
        body: [
          "Many Medicare Advantage (Part C) plans include dental benefits as an added perk — often covering preventive services like cleanings and X-rays at little to no cost, with some coverage for more comprehensive services like fillings or extractions. However, the level of dental coverage varies widely from plan to plan and is not standardized the way Medigap benefits are.",
          "If dental coverage is important to you, it's worth comparing Medicare Advantage plans in your area to see what dental benefits are offered. Just be aware that accepting those benefits means switching from Original Medicare to a managed care network.",
        ],
      },
      {
        heading: "What Are Your Other Options?",
        body: [
          "If you prefer to stay on Original Medicare with a Medigap plan, standalone dental insurance is available from many private carriers. These plans typically cover preventive care at 100% and offer partial coverage for basic and major services after a waiting period.",
          "Dental discount programs are another option — these are not insurance plans, but membership programs that give you reduced rates at participating dentists. We're happy to walk you through your options and help you find the best fit for your situation.",
        ],
      },
    ],
  },
  {
    slug: "does-medicare-plan-g-cover-gym-membership",
    title: "Does Medicare Plan G Cover My Gym Membership?",
    excerpt:
      "If staying active matters to you, you might be wondering whether your Medicare plan covers a gym membership. The answer depends on which type of Medicare coverage you have.",
    keyTakeaways: [
      "Medicare Supplement Plan G does not cover gym memberships.",
      "Many Medicare Advantage plans include fitness benefits like SilverSneakers.",
      "Original Medicare alone does not cover gym memberships either.",
    ],
    content: [
      {
        heading: "What Does Plan G Actually Cover?",
        body: [
          "Medicare Supplement Plan G is designed to cover the out-of-pocket costs that Original Medicare leaves behind — like the 20% coinsurance on doctor visits, hospital coinsurance, and skilled nursing facility care. It is a cost-sharing supplement, not a benefits add-on plan.",
          "Plan G does not include extra perks like gym memberships, dental care, vision benefits, or hearing aids. These types of \"extras\" are not part of any standardized Medigap plan. If you see a Medigap plan advertising fitness benefits, read the fine print carefully — it may be a Medicare Advantage plan using the Medigap branding loosely.",
        ],
      },
      {
        heading: "Which Medicare Plans Do Cover Gym Memberships?",
        body: [
          "Many Medicare Advantage plans (Part C) include fitness benefits as a value-add. The most well-known program is SilverSneakers, which gives members access to thousands of gym locations nationwide at no additional cost. Other fitness programs like One Pass or ActiveFit+ are offered through different Medicare Advantage carriers.",
          "If having gym access through your Medicare plan is important to you, Medicare Advantage is the route to explore. However, keep in mind that Medicare Advantage plans also come with network restrictions, prior authorization requirements, and varying cost-sharing structures that differ significantly from Medigap.",
        ],
      },
      {
        heading: "Can I Have a Medigap Plan and Still Get Fitness Benefits?",
        body: [
          "You cannot combine a Medigap plan with a Medicare Advantage plan — they are mutually exclusive. However, there are other ways to access affordable fitness options if you're on Original Medicare with a Medigap plan.",
          "Many YMCAs, community recreation centers, and gym chains offer senior discounts. Some Medicare Advantage plans offer a standalone gym benefit even if you're not enrolled in their medical coverage — though these arrangements are rare. Ask your broker what options are available in your area.",
        ],
      },
      {
        heading: "Which Is the Better Choice — Plan G or Medicare Advantage?",
        body: [
          "This is one of the most common questions we help clients answer. The right choice depends on your doctors, your health needs, how often you travel, and what benefits matter most to you. There's no universal answer — which is exactly why working with an independent broker who can compare both sides objectively is so valuable.",
          "We'll lay out both options clearly so you can make the decision that's right for your life — not just for your budget.",
        ],
      },
    ],
  },
  {
    slug: "how-does-a-medicare-broker-get-paid",
    title: "How Does a Medicare Broker Get Paid?",
    excerpt:
      "If a Medicare broker's services are free to you, you might wonder how they make money. Here's a transparent look at how broker compensation works — and why it doesn't cost you a dime.",
    keyTakeaways: [
      "Medicare brokers are paid by the insurance companies, not by you.",
      "The price of a plan is the same whether you enroll through a broker or directly with the carrier.",
      "An independent broker works for you — not for any single insurance company.",
    ],
    content: [
      {
        heading: "Who Pays the Broker?",
        body: [
          "When you enroll in a Medicare plan through a licensed broker, the insurance carrier pays the broker a commission — regulated by the Centers for Medicare & Medicaid Services (CMS). You do not pay anything extra for using a broker's services. The monthly premium you pay is exactly the same whether you enroll through a broker, call the insurance company directly, or sign up online.",
          "This commission structure has been in place for decades and is strictly regulated. Carriers cannot offer higher or lower commissions to brokers in exchange for steering clients toward certain plans — CMS standardizes what can be paid.",
        ],
      },
      {
        heading: "Independent Brokers vs. Captive Agents",
        body: [
          "There are two types of agents who help with Medicare enrollment: captive agents and independent brokers. A captive agent works for a single insurance company and can only show you that company's plans. An independent broker — like us at A&E Insurance Agency — is appointed with multiple carriers and can compare plans across the market to find the best fit for you.",
          "Working with an independent broker means you're getting an unbiased comparison. We don't earn more by recommending one carrier over another — our goal is simply to find the plan that's the right fit for your situation.",
        ],
      },
      {
        heading: "Does Using a Broker Cost Me Anything?",
        body: [
          "No — not a single dollar. Our services are completely free to every client we work with, from the initial consultation through enrollment and beyond. We help with plan comparisons, enrollment paperwork, annual reviews, billing questions, and claims issues — at no charge to you.",
          "We consider this part of what it means to serve our clients well. We're in this for the long term, and we hope you'll think of us as a resource you can call anytime you have a Medicare question.",
        ],
      },
      {
        heading: "How Do I Know My Broker Is Looking Out for Me?",
        body: [
          "A good broker asks questions before making any recommendation. They want to understand your doctors, your medications, your health history, your travel habits, and your budget. If an agent jumps straight to a recommendation without asking about your situation, that's a red flag.",
          "At A&E Insurance Agency, we take the time to understand your full picture before presenting any options. Our business is built on referrals — and referrals only come from clients who feel genuinely taken care of.",
        ],
      },
    ],
  },
  {
    slug: "how-does-medicare-cover-colonoscopies",
    title: "How Does Medicare Cover Colonoscopies?",
    excerpt:
      "Colorectal cancer is one of the most preventable cancers when caught early. Medicare covers colonoscopies — but the rules around cost-sharing can be confusing. Here's what to know.",
    keyTakeaways: [
      "Medicare covers preventive colonoscopies at no cost to you if no polyps are found.",
      "If a polyp is removed during a preventive colonoscopy, cost-sharing may apply.",
      "The frequency of coverage depends on your risk level.",
    ],
    content: [
      {
        heading: "Does Medicare Cover Colonoscopies?",
        body: [
          "Yes. Medicare Part B covers colonoscopies as a preventive screening benefit. For people at average risk, Medicare covers one colonoscopy every 10 years. For people at high risk — due to personal or family history of colorectal cancer or polyps — Medicare covers one colonoscopy every 24 months.",
          "When a colonoscopy is performed purely as a preventive screening with no findings, Medicare covers 100% of the cost with no deductible and no coinsurance. You pay nothing.",
        ],
      },
      {
        heading: "What If a Polyp Is Found and Removed?",
        body: [
          "This is where many beneficiaries are caught off guard. If your doctor finds and removes a polyp during what was scheduled as a preventive colonoscopy, the procedure may be reclassified from preventive to therapeutic — and your normal Part B cost-sharing (the 20% coinsurance) could apply.",
          "The good news is that if you have a Medigap plan, that 20% is typically covered. Without supplemental coverage, however, you could face an unexpected bill after what you assumed was a fully covered screening.",
        ],
      },
      {
        heading: "Does It Matter Which Setting the Procedure Is Done In?",
        body: [
          "Yes. Colonoscopies are typically performed in either a hospital outpatient department or an ambulatory surgery center (ASC). The cost-sharing and Medicare payment rates differ between these settings. ASCs generally result in lower overall costs, which matters if you have cost-sharing responsibilities.",
          "Ask your doctor where the procedure will be performed and how it will be billed before your appointment.",
        ],
      },
      {
        heading: "What About Medicare Advantage?",
        body: [
          "If you have a Medicare Advantage plan, colonoscopies are still covered — but your cost-sharing will be governed by your plan's rules, not Original Medicare's. Some plans cover preventive colonoscopies at $0, while others may have copays or require that you use an in-network facility.",
          "Always verify your plan's coverage details before scheduling. A quick call to your plan's customer service line or a conversation with your broker can save you from a surprise bill.",
        ],
      },
    ],
  },
  {
    slug: "what-is-medicare-and-who-is-eligible",
    title: "What Is Medicare and Who Is Eligible?",
    excerpt:
      "Medicare is the federal health insurance program that serves tens of millions of Americans. Here's who qualifies, what it covers at a high level, and when your coverage can begin.",
    keyTakeaways: [
      "Medicare is available to most people at age 65, as well as certain younger individuals with qualifying disabilities.",
      "Your Initial Enrollment Period begins three months before the month you turn 65.",
      "People with ESRD or ALS may qualify for Medicare before age 65.",
    ],
    content: [
      {
        heading: "What Is Medicare?",
        body: [
          "Medicare is a federal health insurance program administered by the Centers for Medicare & Medicaid Services (CMS). It was established in 1965 to ensure that older Americans and people with certain disabilities have access to health coverage regardless of their income or health status. Unlike Medicaid, which is income-based, Medicare eligibility is primarily tied to age and work history.",
          "The program is funded through a combination of payroll taxes, monthly premiums paid by enrollees, and general federal revenue. Most Americans who have worked and paid into the system for at least 10 years — or are married to someone who has — will qualify for Part A at no premium cost.",
        ],
      },
      {
        heading: "Who Is Eligible for Medicare?",
        body: [
          "The most common path to Medicare eligibility is turning 65. If you are a U.S. citizen or permanent legal resident who has lived in the country for at least five continuous years, you are generally eligible to enroll in Medicare at 65.",
          "Younger individuals may also qualify for Medicare if they have received Social Security Disability Insurance (SSDI) benefits for 24 consecutive months. Two additional conditions — End-Stage Renal Disease (ESRD), which is permanent kidney failure requiring dialysis or a transplant, and Amyotrophic Lateral Sclerosis (ALS) — qualify individuals for Medicare immediately upon diagnosis, without the standard waiting period.",
        ],
      },
      {
        heading: "What Does Original Medicare Cover?",
        body: [
          "Original Medicare consists of two parts. Part A covers inpatient hospital stays, skilled nursing facility care following a qualifying hospital stay, hospice care, and some home health services. Most people do not pay a premium for Part A if they or their spouse have worked and paid Medicare taxes for at least 40 quarters.",
          "Part B covers outpatient medical services — doctor visits, lab work, diagnostic imaging, preventive screenings, and durable medical equipment. Part B requires a monthly premium, which is adjusted annually and may be higher for beneficiaries with higher incomes through the IRMAA surcharge.",
        ],
      },
      {
        heading: "When Does Your Eligibility Begin?",
        body: [
          "Your Initial Enrollment Period (IEP) opens three months before the month you turn 65, includes your birthday month, and closes three months after. That gives you a seven-month window to enroll without any late penalties.",
          "If you enroll during the first three months of your IEP, your coverage typically begins on the first day of your birthday month. If you enroll during or after your birthday month, your start date may be delayed by one or more months. Timing your enrollment correctly can prevent gaps in coverage — and working with a licensed Medicare broker can help you get it right.",
        ],
      },
    ],
  },
  {
    slug: "what-are-the-different-parts-of-medicare",
    title: "What Are the Different Parts of Medicare?",
    excerpt:
      "Medicare isn't a single plan — it's made up of four distinct parts, each covering different types of care. Understanding what each part does is the foundation of making smart coverage decisions.",
    keyTakeaways: [
      "Part A covers hospital and inpatient care; Part B covers outpatient and medical services.",
      "Part C (Medicare Advantage) and Part D (drug coverage) are offered by private insurers.",
      "Medigap supplements Original Medicare but cannot be combined with Medicare Advantage.",
    ],
    content: [
      {
        heading: "Part A — Hospital Insurance",
        body: [
          "Part A is often called hospital insurance. It covers inpatient hospital stays, care in a skilled nursing facility following a qualifying hospital admission of at least three days, hospice care for those with a terminal diagnosis, and certain home health services ordered by a physician.",
          "Most people qualify for Part A at no premium cost if they or their spouse worked and paid Medicare taxes for at least 40 quarters (10 years). Even without enough work history, Part A can be purchased at a monthly premium. Part A still comes with deductibles and coinsurance that apply to hospital stays.",
        ],
      },
      {
        heading: "Part B — Medical Insurance",
        body: [
          "Part B covers the outpatient side of your healthcare — doctor visits, preventive screenings, lab tests, imaging, mental health services, physical therapy, and durable medical equipment like wheelchairs or walkers. It also covers certain medications administered in a clinical setting, such as chemotherapy drugs.",
          "Unlike Part A, Part B always comes with a monthly premium. The standard amount is set annually by CMS and may be higher for beneficiaries whose income exceeds certain thresholds (known as IRMAA). Part B typically pays 80% of approved costs after your annual deductible is met, leaving you responsible for the remaining 20% — with no cap.",
        ],
      },
      {
        heading: "Part C — Medicare Advantage",
        body: [
          "Medicare Advantage, also called Part C, is offered by private insurance companies approved by Medicare. These plans bundle the coverage of Part A and Part B — and usually Part D — into a single plan, often with additional benefits like dental, vision, hearing, and fitness programs.",
          "Medicare Advantage plans typically operate within networks of providers and may require prior authorization for certain services. Costs and benefits vary significantly by plan and location. While some plans have very low or $0 premiums, they often come with higher out-of-pocket costs when you actually use services. These plans are not the same as Medigap.",
        ],
      },
      {
        heading: "Part D — Prescription Drug Coverage",
        body: [
          "Part D provides coverage for prescription medications. Like Part C, Part D plans are offered by private insurance companies and must be approved by Medicare. Each plan has its own formulary — a list of covered drugs — organized into tiers that determine your cost-sharing.",
          "Part D is optional, but delaying enrollment without other creditable drug coverage can result in a permanent late enrollment penalty. If you enroll in a Medicare Advantage plan that includes drug coverage, you don't need a separate Part D plan.",
        ],
      },
      {
        heading: "Medigap — Medicare Supplement Insurance",
        body: [
          "Medigap is supplemental insurance sold by private companies to fill the cost-sharing gaps left by Original Medicare — things like the Part B 20% coinsurance, hospital deductibles, and excess charges. Medigap plans are standardized and labeled by letter (Plan G, Plan N, etc.), so the benefits for each plan letter are identical regardless of which company sells it.",
          "Medigap only works alongside Original Medicare (Parts A and B). You cannot use a Medigap plan while enrolled in a Medicare Advantage plan — they are mutually exclusive. Choosing between Medicare Advantage and Original Medicare with Medigap is one of the most consequential decisions a new Medicare beneficiary makes.",
        ],
      },
    ],
  },
  {
    slug: "when-should-i-sign-up-for-medicare",
    title: "When Should I Sign Up for Medicare?",
    excerpt:
      "Timing your Medicare enrollment correctly is one of the most important decisions you'll make as you approach 65. Sign up too late and you could face permanent penalties or gaps in coverage.",
    keyTakeaways: [
      "Your Initial Enrollment Period is a seven-month window surrounding your 65th birthday.",
      "Some people are enrolled in Medicare automatically; others must actively sign up.",
      "Enrolling during the first three months of your IEP gives you the earliest possible start date.",
    ],
    content: [
      {
        heading: "The Initial Enrollment Period (IEP)",
        body: [
          "When you turn 65, you become eligible for a seven-month Initial Enrollment Period. It begins three months before the month of your 65th birthday, includes your birthday month, and ends three months after. This is your first and often most important window to enroll in Medicare without risking late enrollment penalties.",
          "If you enroll in the first three months of your IEP, your coverage typically starts on the first day of your birthday month. If you wait until your birthday month or the months after, your start date is pushed back — meaning you could have a gap in coverage if you're relying on Medicare as your primary insurance.",
        ],
      },
      {
        heading: "Are You Enrolled Automatically?",
        body: [
          "Some people are automatically enrolled in Medicare Parts A and B without having to take any action. This typically happens if you are already receiving Social Security or Railroad Retirement Board benefits at least four months before turning 65. In that case, your Medicare card will arrive in the mail about three months before your 65th birthday.",
          "If you are not yet receiving Social Security — for example, if you delayed claiming benefits — you will need to actively enroll in Medicare during your IEP. You can do this online at ssa.gov, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office.",
        ],
      },
      {
        heading: "What If You're Still Working at 65?",
        body: [
          "If you or your spouse are still working and covered by a group health plan through an employer with 20 or more employees, you may be able to delay Part B enrollment without a penalty. In this case, your employer coverage is considered primary and Medicare is secondary.",
          "However, this only applies if the employer plan is considered \"creditable\" coverage. Once that employer coverage ends, you'll have a Special Enrollment Period to sign up for Part B without penalty. Navigating this situation correctly requires looking at your specific plan details — and getting it wrong can result in both a coverage gap and a permanent premium penalty.",
        ],
      },
      {
        heading: "Part D Timing Matters Too",
        body: [
          "Don't forget about prescription drug coverage. If you don't enroll in a Part D plan when you first become eligible — and you don't have other creditable drug coverage — you may face a late enrollment penalty that gets added to your Part D premium permanently.",
          "Even if you don't take many medications right now, enrolling in a low-cost Part D plan when you first become eligible is often the smart move. We help clients evaluate their medication lists and find plans that fit — at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-if-i-miss-my-enrollment-window",
    title: "What Happens If I Miss My Medicare Enrollment Window?",
    excerpt:
      "Missing your Medicare enrollment window isn't just an inconvenience — it can trigger penalties that follow you for the rest of your life. Here's what you need to know before you let a deadline pass.",
    keyTakeaways: [
      "Late enrollment in Part B can result in a permanent premium penalty of 10% for each 12-month period you delayed.",
      "The Part D late enrollment penalty is calculated monthly and added permanently to your premium.",
      "Special Enrollment Periods exist for people with qualifying employer or union coverage.",
    ],
    content: [
      {
        heading: "The Part B Late Enrollment Penalty",
        body: [
          "If you don't sign up for Medicare Part B when you're first eligible — and you don't have a qualifying reason to delay — you'll pay a late enrollment penalty. For every 12-month period you were eligible but didn't enroll, your Part B premium increases by 10%. And unlike most penalties, this one is permanent. It stays with you for as long as you have Part B.",
          "For example, if you waited two years past your Initial Enrollment Period without creditable coverage, your Part B premium could be 20% higher than the standard rate — every month, for the rest of your life. At current premium levels, that adds up to hundreds of dollars per year in extra costs.",
        ],
      },
      {
        heading: "The Part D Late Enrollment Penalty",
        body: [
          "The Part D penalty works differently but is equally permanent. For each month you went without creditable prescription drug coverage after your eligibility date, you owe 1% of the national base beneficiary premium. Those months add up — and the penalty is recalculated each year as the base premium changes.",
          "\"Creditable\" drug coverage means your existing coverage is at least as good as standard Medicare Part D. Your employer or insurer is required to notify you each year whether your drug coverage meets this standard. If you're not sure, ask — and keep those notices in your records.",
        ],
      },
      {
        heading: "Special Enrollment Periods (SEPs)",
        body: [
          "If you delayed Medicare enrollment because you or your spouse had active coverage through a current employer or union — not retiree coverage — you may qualify for a Special Enrollment Period. This allows you to enroll in Part B (and Part D) without penalty after your employer coverage ends.",
          "The SEP for Part B is typically eight months from the date your employer coverage ends or the employment ends, whichever comes first. The Part D SEP is shorter — usually 63 days. Missing these windows after your employer coverage ends means you're back to waiting for General Enrollment Period, which runs January through March each year, with coverage starting July 1.",
        ],
      },
      {
        heading: "We Help You Evaluate Your Situation",
        body: [
          "Deciding whether to delay Medicare enrollment is one of the most consequential choices you'll make in your transition to retirement. The right answer depends on the size of your employer, the quality of your current plan, what you pay in premiums, and how your coverage compares to Medicare's standards.",
          "We work with clients every day to analyze exactly these situations — and we do it at no cost to you. Getting this right once is far less painful than paying a penalty for the rest of your life.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-medicare-cost",
    title: "How Much Does Medicare Cost? Is It Free?",
    excerpt:
      "Medicare is not free — but for many people, parts of it cost nothing. Understanding what you'll pay in premiums, deductibles, and cost-sharing is essential to budgeting for retirement healthcare.",
    keyTakeaways: [
      "Most people pay $0 for Part A if they have sufficient work history.",
      "Part B and Part D always have monthly premiums, which may be higher based on income.",
      "Medigap and Medicare Advantage plans help manage out-of-pocket costs beyond premiums.",
    ],
    content: [
      {
        heading: "Part A Costs",
        body: [
          "Most people qualify for premium-free Part A because they or their spouse paid Medicare taxes for at least 40 quarters (10 years) while working. If you don't have enough work history, you can still purchase Part A — the premium depends on how many quarters you've earned.",
          "Even with premium-free Part A, you're still responsible for cost-sharing when you use the coverage. Part A comes with a per-benefit-period deductible for hospital stays, and if your hospital stay extends beyond 60 days, daily coinsurance applies. These costs can add up quickly without supplemental coverage in place.",
        ],
      },
      {
        heading: "Part B Costs",
        body: [
          "Part B always has a monthly premium. The standard amount is set annually by CMS, and most beneficiaries pay it. However, if your income exceeds certain thresholds, you'll pay a higher premium through the Income-Related Monthly Adjustment Amount (IRMAA). IRMAA is based on your tax return from two years prior, which sometimes catches people off guard when income spikes in a given year.",
          "Beyond the premium, Part B has an annual deductible. Once you meet that deductible, Medicare pays 80% of approved costs and you're responsible for the remaining 20% — with no annual out-of-pocket maximum under Original Medicare alone.",
        ],
      },
      {
        heading: "Part D Costs",
        body: [
          "Prescription drug plans (Part D) also carry monthly premiums, which vary based on the plan and the drugs you take. Like Part B, higher-income beneficiaries pay an IRMAA surcharge on their Part D premiums as well.",
          "Each Part D plan has its own deductible, copays, and coinsurance structure depending on which tier your medications fall into. Choosing a plan based solely on the lowest premium can sometimes lead to higher total costs if your specific drugs are not well-covered on that plan's formulary.",
        ],
      },
      {
        heading: "Managing Your Out-of-Pocket Costs",
        body: [
          "The most common way to control Medicare out-of-pocket exposure is by adding either a Medicare Supplement (Medigap) plan or choosing a Medicare Advantage plan. Medigap plans pay after Medicare and can cover the 20% coinsurance, deductibles, and other gaps — providing very predictable costs. Medicare Advantage plans bundle your coverage with an annual out-of-pocket maximum, which Original Medicare does not have.",
          "Understanding the total cost picture — not just premiums — is key to making the right choice. We help our clients run the numbers and compare all-in costs across their options, at no charge.",
        ],
      },
    ],
  },
  {
    slug: "difference-between-original-medicare-advantage-and-medigap",
    title: "What's the Difference Between Original Medicare, Medicare Advantage, and Medigap?",
    excerpt:
      "These three terms describe very different types of Medicare coverage — and confusing them is one of the most common mistakes people make when enrolling. Here's a clear breakdown.",
    keyTakeaways: [
      "Original Medicare (Parts A and B) is the foundation — everything else builds on or replaces it.",
      "Medicare Advantage replaces Original Medicare; Medigap supplements it.",
      "You cannot have both a Medicare Advantage plan and a Medigap plan at the same time.",
    ],
    content: [
      {
        heading: "Original Medicare — The Foundation",
        body: [
          "Original Medicare consists of Part A (hospital insurance) and Part B (medical insurance). It is managed directly by the federal government and accepted by any provider in the country who accepts Medicare — which is the vast majority of doctors and hospitals. There are no network restrictions.",
          "The trade-off is that Original Medicare alone leaves significant financial exposure. There is no annual out-of-pocket maximum, and the 20% coinsurance under Part B has no cap. A serious illness or hospitalization can result in thousands of dollars in uncovered costs without additional coverage.",
        ],
      },
      {
        heading: "Medigap — Filling the Gaps in Original Medicare",
        body: [
          "Medigap, also called Medicare Supplement insurance, is sold by private insurance companies to cover the cost-sharing gaps that Original Medicare leaves behind. Plans are standardized by letter — Plan G, Plan N, and others — so the benefits for each letter are identical regardless of which insurer sells the plan. The only difference between companies offering the same plan letter is the premium.",
          "Medigap plans work exclusively with Original Medicare. They do not add dental, vision, or drug coverage. To have prescription drug coverage with a Medigap plan, you need a separate Part D plan. The advantage of Medigap is predictability — with the right plan, your out-of-pocket costs can be extremely limited and easy to budget.",
        ],
      },
      {
        heading: "Medicare Advantage — An All-in-One Alternative",
        body: [
          "Medicare Advantage (Part C) is offered by private insurers approved by Medicare. When you enroll in a Medicare Advantage plan, the plan takes over your Medicare benefits instead of the government paying directly. These plans are required to cover everything Original Medicare covers, and most also include prescription drug coverage and additional benefits like dental, vision, and fitness programs.",
          "Medicare Advantage plans typically operate within defined networks of providers and may require referrals for specialists or prior authorization for certain services. They come with annual out-of-pocket maximums, which can provide a financial safety net. Costs and benefits vary significantly by plan and location.",
        ],
      },
      {
        heading: "Which Is Right for You?",
        body: [
          "The choice between Medicare Advantage and Original Medicare with Medigap is one of the most important decisions you'll make in retirement. It depends on your health, your doctors, the medications you take, your budget, and your tolerance for uncertainty in annual costs.",
          "There is no single right answer — but there is a right answer for your specific situation. We help clients work through this comparison every day, looking at real plan options in their area and matching them to their actual needs. It costs you nothing to sit down with us.",
        ],
      },
    ],
  },
  {
    slug: "does-medicare-cover-all-my-medical-bills",
    title: "Does Medicare Cover All My Medical Bills?",
    excerpt:
      "Medicare provides solid health coverage — but it was never designed to pay for everything. Understanding what it leaves uncovered is just as important as knowing what it does pay for.",
    keyTakeaways: [
      "Part B typically covers 80% of approved costs — you owe the other 20% with no cap.",
      "Medicare does not cover long-term custodial care in nursing homes or assisted living.",
      "Routine dental, vision, and hearing services are generally not covered under Original Medicare.",
    ],
    content: [
      {
        heading: "The 80/20 Split — and Why It Matters",
        body: [
          "Under Original Medicare Part B, Medicare pays 80% of the approved amount for covered services once you've met your annual deductible. You are responsible for the remaining 20%. This sounds manageable until you consider that there is no annual out-of-pocket maximum under Original Medicare alone.",
          "If you're diagnosed with cancer, have a heart attack, or face a major surgery, your 20% share can quickly reach tens of thousands of dollars. This is the exposure that Medicare Supplement (Medigap) plans are designed to protect against — by covering that coinsurance so your costs are predictable.",
        ],
      },
      {
        heading: "What Medicare Does Not Cover",
        body: [
          "Long-term custodial care is one of the most significant gaps in Medicare coverage. If you need help with daily activities — bathing, dressing, eating — in a nursing home or assisted living facility over an extended period, Medicare will not pay for it. Medicare only covers short-term skilled nursing care following a qualifying hospital stay, and only up to 100 days.",
          "Routine dental care — cleanings, fillings, extractions, crowns — is not covered under Original Medicare. Neither are routine eye exams or eyeglasses, most hearing aids, or cosmetic procedures. These are services many people use regularly, and the cost adds up significantly over retirement.",
        ],
      },
      {
        heading: "Other Common Gaps",
        body: [
          "Medicare does not cover care received outside the United States in most circumstances. If you travel internationally or spend part of the year abroad, you would typically be responsible for any medical costs incurred overseas.",
          "Prescription drugs are not covered under Original Medicare Parts A and B. You need a separate Part D plan for most outpatient medications. Some drugs administered in a clinical setting are covered under Part B, but the majority of drugs you pick up at a pharmacy require Part D coverage.",
        ],
      },
      {
        heading: "How to Close the Gaps",
        body: [
          "The two primary ways to address Medicare's gaps are Medicare Supplement (Medigap) plans and Medicare Advantage plans. Medigap plans cover the cost-sharing that Original Medicare leaves behind — particularly the 20% coinsurance and deductibles. Medicare Advantage plans add an annual out-of-pocket maximum and often include extra benefits.",
          "For long-term care exposure, separate long-term care insurance or hybrid life/LTC products exist to protect your assets if you ever need extended custodial care. Addressing these gaps before you need them is the foundation of a sound retirement health strategy.",
        ],
      },
    ],
  },
  {
    slug: "how-does-medicare-work-with-employer-coverage",
    title: "How Does Medicare Work With My Employer Coverage or Other Insurance?",
    excerpt:
      "If you're still working at 65 or have coverage through a spouse's employer, you need to understand how Medicare coordinates with that coverage — and whether delaying enrollment makes sense for you.",
    keyTakeaways: [
      "Whether to enroll in Medicare at 65 depends largely on the size of your employer.",
      "With a large employer plan, Medicare may be secondary and enrollment can sometimes be delayed without penalty.",
      "Mis-timing your enrollment can result in coverage gaps, penalties, or unexpected costs.",
    ],
    content: [
      {
        heading: "Primary vs. Secondary Payer — What It Means",
        body: [
          "When you have both Medicare and another insurance plan, one plan pays first (primary) and the other picks up some or all of the remainder (secondary). The rules that determine which plan pays first are called coordination of benefits rules, and they depend on factors like the size of your employer and whether you are actively working.",
          "Getting this wrong — enrolling in Medicare when you didn't need to, or failing to enroll when you should — can lead to coverage gaps, denied claims, or permanent premium penalties. Understanding how your specific situation works before you turn 65 is essential.",
        ],
      },
      {
        heading: "Large Employer Coverage (20+ Employees)",
        body: [
          "If you are actively working and covered by a group health plan through an employer with 20 or more employees, your employer plan is primary and Medicare is secondary. In this case, you may be able to delay enrolling in Part B without a penalty, because your employer plan qualifies as creditable coverage.",
          "Once your employer coverage ends — whether because you retire, leave your job, or lose eligibility — you typically have an eight-month Special Enrollment Period to sign up for Part B without penalty. It's critical to enroll within this window; waiting longer means you'll have to wait for the General Enrollment Period and may face a permanent penalty.",
        ],
      },
      {
        heading: "Small Employer Coverage (Fewer Than 20 Employees)",
        body: [
          "If your employer has fewer than 20 employees, Medicare becomes primary even if you're still actively working and covered by the employer plan. In this scenario, failing to enroll in Medicare on time means your employer plan may refuse to pay for services it would otherwise cover — leaving you with unexpected bills.",
          "This distinction catches many people off guard. They assume that having employer coverage means they can always delay Medicare — but that's only true above the 20-employee threshold. Below it, enrolling in Medicare at 65 is usually the right move.",
        ],
      },
      {
        heading: "We Help You Evaluate Your Specific Situation",
        body: [
          "The interaction between Medicare and employer coverage is one of the most nuanced areas of Medicare planning. The right decision depends on your employer size, the quality of your current plan, what you pay in premiums, and whether your coverage is considered creditable for both Part B and Part D.",
          "We help clients work through exactly these decisions before they turn 65 — and we do it at no cost to you. One conversation now can prevent years of higher premiums and coverage gaps.",
        ],
      },
    ],
  },
  {
    slug: "can-i-change-my-medicare-plan",
    title: "Can I Change My Medicare Plan Later?",
    excerpt:
      "Medicare is not a set-it-and-forget-it decision. There are defined windows each year when you can switch plans — and certain life events that open additional opportunities to make changes.",
    keyTakeaways: [
      "Annual Enrollment Period (Oct 15–Dec 7) is the main window to change Medicare coverage each year.",
      "Medicare Advantage enrollees have an additional Open Enrollment Period from Jan 1–Mar 31.",
      "Special Enrollment Periods allow changes outside the standard windows for qualifying life events.",
    ],
    content: [
      {
        heading: "Annual Enrollment Period — October 15 to December 7",
        body: [
          "The Annual Enrollment Period (AEP) is the primary window each year when Medicare beneficiaries can make changes to their coverage. During this period, you can switch from Original Medicare to Medicare Advantage, switch from Medicare Advantage back to Original Medicare, change from one Medicare Advantage plan to another, join a Part D plan, switch Part D plans, or drop Part D coverage.",
          "Changes made during AEP take effect on January 1 of the following year. This is the most important enrollment period for most beneficiaries, and it's worth reviewing your coverage every year — plan networks, formularies, and premiums change annually.",
        ],
      },
      {
        heading: "Medicare Advantage Open Enrollment — January 1 to March 31",
        body: [
          "If you are already enrolled in a Medicare Advantage plan, you have an additional window at the start of each year. Between January 1 and March 31, you can switch to a different Medicare Advantage plan or return to Original Medicare (and enroll in a stand-alone Part D plan). Changes during this period take effect the first day of the month after your plan receives your enrollment request.",
          "This period does not apply to people on Original Medicare — it is specifically for those already in a Medicare Advantage plan who want to make a change.",
        ],
      },
      {
        heading: "Special Enrollment Periods",
        body: [
          "Life doesn't always follow a schedule, and Medicare accounts for that with Special Enrollment Periods (SEPs). Certain events can trigger a SEP that allows you to make coverage changes outside the standard enrollment windows. Common qualifying events include moving out of your plan's service area, losing other health coverage, your plan leaving the market, or qualifying for low-income assistance programs.",
          "The duration and specifics of each SEP vary depending on the triggering event. Not all changes are available through every SEP — so it's important to understand which changes you're eligible to make and within what timeframe.",
        ],
      },
      {
        heading: "Medigap Enrollment Is Different",
        body: [
          "Switching Medigap plans is governed by different rules. The best time to enroll in a Medigap plan is during your Medigap Open Enrollment Period — the six months starting the month you're both 65 and enrolled in Part B. During this window, insurers cannot use medical underwriting to deny you coverage or charge you higher premiums based on health conditions.",
          "Outside of this initial window, most states allow insurers to use medical underwriting — meaning your health history could result in a higher premium or even denial of coverage. This is why choosing your Medigap plan at the right time matters so much.",
        ],
      },
    ],
  },
  {
    slug: "how-do-i-get-help-choosing-the-right-medicare-plan",
    title: "How Do I Get Help Choosing the Right Medicare Plan?",
    excerpt:
      "Medicare decisions are complex, and the options can feel overwhelming. Here's where to find reliable guidance — including what to expect when you work with a local licensed Medicare broker.",
    keyTakeaways: [
      "Medicare.gov and State Health Insurance Assistance Programs (SHIP) offer free, unbiased information.",
      "A licensed Medicare broker compares plans across multiple carriers and costs you nothing.",
      "The right plan depends on your doctors, medications, budget, and health priorities — not just the premium.",
    ],
    content: [
      {
        heading: "Start With Official Resources",
        body: [
          "Medicare.gov is the official government website and a solid starting point. The Medicare Plan Finder tool allows you to compare Medicare Advantage and Part D plans available in your ZIP code based on the drugs you take and the providers you see. It's free to use and pulls real-time plan data directly from CMS.",
          "The State Health Insurance Assistance Program (SHIP) provides free, one-on-one Medicare counseling through a network of trained volunteers and staff across every state. In Florida, SHIP is operated through the Florida Department of Elder Affairs. SHIP counselors are not insurance agents and do not sell anything — they provide unbiased information to help you understand your options.",
        ],
      },
      {
        heading: "What a Licensed Medicare Broker Does",
        body: [
          "A licensed Medicare insurance broker is an agent who is authorized to sell Medicare plans from multiple insurance carriers. Unlike a captive agent who represents only one company, an independent broker can compare plans across the market and help you find the option that actually fits your situation — not just the one their company sells.",
          "Working with a broker costs you nothing. Brokers are compensated by the insurance carriers, not by you. Your premiums are identical whether you enroll through a broker or directly with the carrier. What you gain is a professional who knows the local market, understands plan details, and can walk you through the decision from start to finish.",
        ],
      },
      {
        heading: "What to Expect When You Work With Us",
        body: [
          "At A&E Insurance Agency, we start by listening. We ask about the doctors you want to keep, the medications you take, the hospitals you prefer, and what matters most to you in a health plan. We then compare the available options in your area — checking provider networks, drug formularies, out-of-pocket costs, and total annual cost — and present you with the plans that best fit your needs.",
          "We explain your options in plain language, answer your questions without pressure, and help you enroll when you're ready. And because our relationship doesn't end at enrollment, we're available throughout the year when questions come up — including during Annual Enrollment when it's time to review your coverage again.",
        ],
      },
      {
        heading: "You Don't Have to Figure This Out Alone",
        body: [
          "Medicare is a major financial decision that will affect your health and your budget for the rest of your life. The right plan can save you thousands of dollars a year and give you access to the care you need. The wrong plan can cost you more than expected or leave your doctors out of network.",
          "We serve Medicare beneficiaries across South Florida and are licensed to help you navigate every part of this process — at no cost to you. Call us, schedule a meeting, or come into our office. We're here to make Medicare simple.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-medicare-savings-program",
    title: "What Is a Medicare Savings Program (MSP)?",
    excerpt:
      "If your income is limited, a Medicare Savings Program may help pay your Part B premium and other Medicare costs. Many people who qualify haven't applied yet — and the savings can be significant.",
    keyTakeaways: [
      "Medicare Savings Programs are state-run Medicaid programs that help pay Medicare costs for people with limited income and assets.",
      "There are four program types — QMB, SLMB, QI, and QDWI — each with different levels of assistance.",
      "Many people who qualify have never applied. We can help you determine your eligibility at no cost.",
    ],
    content: [
      {
        heading: "What Is a Medicare Savings Program?",
        body: [
          "A Medicare Savings Program (MSP) is a state-administered Medicaid program designed to help people with limited income and resources pay some or all of their Medicare costs. These programs exist specifically because Medicare — even with its broad coverage — still comes with premiums, deductibles, and cost-sharing that can be a real burden on a fixed income.",
          "MSPs are funded jointly by the federal and state governments and are managed at the state level. In Florida, the program is administered through the Agency for Health Care Administration (AHCA). Eligibility is based on income and asset limits that are updated each year.",
        ],
      },
      {
        heading: "The Four Types of Medicare Savings Programs",
        body: [
          "The Qualified Medicare Beneficiary (QMB) program is the most comprehensive. It covers Part A and Part B premiums, deductibles, coinsurance, and copayments. People enrolled in QMB also automatically qualify for Extra Help with Part D costs.",
          "The Specified Low-Income Medicare Beneficiary (SLMB) program pays the Part B premium only. The Qualifying Individual (QI) program also pays the Part B premium and is funded on a first-come, first-served basis each year. The Qualified Disabled and Working Individuals (QDWI) program helps certain disabled individuals who have returned to work pay their Part A premium if they lost premium-free Part A coverage.",
        ],
      },
      {
        heading: "Who Qualifies?",
        body: [
          "Eligibility is based on monthly income and countable resources, which are updated annually. In general, individuals with income near or below the federal poverty level and limited assets may qualify for one of the four program tiers. Resources like your primary home, one car, and personal belongings typically do not count toward the asset limit.",
          "One important thing to understand: qualifying for an MSP also often triggers automatic enrollment in Extra Help for Part D — which can dramatically reduce prescription drug costs as well. The benefits can stack in meaningful ways for people who qualify.",
        ],
      },
      {
        heading: "Many People Who Qualify Haven't Applied",
        body: [
          "One of the most common situations we encounter is clients who have been eligible for a Medicare Savings Program for years but never knew it existed. The savings — particularly for QMB, which eliminates nearly all Medicare cost-sharing — can amount to thousands of dollars per year.",
          "We help our clients understand whether they may qualify and walk them through the state application process. There's no cost to work with us, and we're familiar with the Florida application process. If you're on a fixed income and paying Medicare premiums or cost-sharing out of pocket, it's worth a conversation.",
        ],
      },
    ],
  },
  {
    slug: "what-is-extra-help-for-medicare-prescription-drugs",
    title: "What Is Extra Help for Medicare Prescription Drugs?",
    excerpt:
      "Extra Help — also called the Low-Income Subsidy — is a federal program that can dramatically reduce what you pay for Medicare Part D prescription drug coverage. Many people who qualify don't know they're eligible.",
    keyTakeaways: [
      "Extra Help can reduce or eliminate Part D premiums, deductibles, and copays for qualifying beneficiaries.",
      "Some people qualify automatically through Medicaid, SSI, or a Medicare Savings Program.",
      "Others need to apply through Social Security — and we can help guide you through that process.",
    ],
    content: [
      {
        heading: "What Is Extra Help?",
        body: [
          "Extra Help, officially called the Low-Income Subsidy (LIS), is a federal program administered by the Social Security Administration that helps Medicare beneficiaries with limited income and resources pay for their Part D prescription drug costs. It can reduce or eliminate monthly Part D premiums, annual deductibles, and the copayments or coinsurance you pay at the pharmacy.",
          "In 2026, people with full Extra Help pay small fixed copays for covered generic and brand-name drugs, with no cost after reaching a certain drug spending level. The savings can be substantial — particularly for beneficiaries who take multiple medications or rely on brand-name drugs.",
        ],
      },
      {
        heading: "Who Qualifies Automatically?",
        body: [
          "Some people are automatically enrolled in Extra Help and never need to apply. If you receive full Medicaid benefits, Supplemental Security Income (SSI), or are enrolled in a Medicare Savings Program that pays your Part B premium — such as QMB, SLMB, or QI — you typically qualify for Extra Help automatically.",
          "If you qualify automatically, Social Security will notify you by mail. You'll still need to choose a Part D plan, but your costs within that plan will be significantly reduced.",
        ],
      },
      {
        heading: "Who Needs to Apply?",
        body: [
          "People who don't qualify automatically but have limited income and resources can apply for Extra Help directly through Social Security — online at ssa.gov, by phone at 1-800-772-1213, or in person at a local Social Security office. Income and resource limits are updated annually.",
          "For 2026, eligibility has been expanded to individuals with incomes up to 150% of the federal poverty level who meet the resource requirements — with resource limits of $18,090 for individuals and $36,100 for married couples. These figures are updated annually, and certain assets — like your home and one vehicle — are excluded from the resource calculation. If your income is close to these limits, it's still worth applying.",
        ],
      },
      {
        heading: "Don't Leave Prescription Savings on the Table",
        body: [
          "Extra Help is one of the most underutilized benefits in Medicare. Beneficiaries who qualify and are enrolled can save hundreds or even thousands of dollars per year on prescription drug costs — but they have to know it exists and take the step to apply.",
          "We help our clients understand whether they may qualify for Extra Help and walk them through the application process at no cost. If you're on Medicare and struggling with drug costs, this is one of the first things we look at together.",
        ],
      },
    ],
  },
  {
    slug: "can-i-delay-enrolling-in-medicare-part-b",
    title: "Can I Delay Enrolling in Medicare Part B?",
    excerpt:
      "Some people can safely delay Part B — but getting this wrong can trigger lifelong premium penalties and coverage gaps. Whether delaying is smart depends entirely on your specific coverage situation.",
    keyTakeaways: [
      "You can delay Part B without penalty only if you have creditable coverage from an active employer with 20 or more employees.",
      "Retiree coverage, COBRA, and small employer plans generally do not allow safe Part B delay.",
      "When qualifying coverage ends, you have an 8-month Special Enrollment Period to sign up — missing it means higher premiums for life.",
    ],
    content: [
      {
        heading: "When Delaying Part B Is Safe",
        body: [
          "If you or your spouse is still actively working and covered by group health insurance through an employer with 20 or more employees, that employer coverage is considered primary — meaning it pays before Medicare would. In this situation, you may delay enrolling in Part B without facing a late enrollment penalty, because your employer plan qualifies as creditable coverage.",
          "To take advantage of this, you need to keep documentation showing that you had qualifying employer coverage during the period you delayed. When that coverage ends, you will have a Special Enrollment Period to sign up for Part B without penalty.",
        ],
      },
      {
        heading: "When Delaying Part B Is Risky",
        body: [
          "Not all coverage qualifies as a valid reason to delay Part B. Retiree coverage — insurance provided by a former employer after you've stopped working — does not allow you to delay Part B safely. COBRA continuation coverage does not qualify either. Coverage from a small employer with fewer than 20 employees also does not allow safe delay, because in that case Medicare is actually primary, and the small employer plan is secondary.",
          "If you delay Part B based on the wrong type of coverage, you could face a permanent late enrollment penalty of 10% for every 12-month period you were eligible but not enrolled — and you could be left with unexpected bills that your secondary plan refuses to cover because Medicare should have paid first.",
        ],
      },
      {
        heading: "The Special Enrollment Period When Coverage Ends",
        body: [
          "When your qualifying employer coverage ends — because you retire, leave your job, or your employer drops coverage — you have an 8-month Special Enrollment Period to sign up for Part B without a penalty. This window begins the month after your employment or coverage ends, whichever comes first.",
          "Missing this 8-month window means you'll have to wait for the General Enrollment Period, which runs January 1 through March 31 each year, with coverage beginning July 1. That's a potential gap of months without Medicare coverage — and a permanent premium penalty that follows you for life.",
        ],
      },
      {
        heading: "Get This Right Before You Turn 65",
        body: [
          "If you're approaching 65 and still working, schedule a consultation before your Initial Enrollment Period opens. We'll review your employer coverage — including whether your employer has 20 or more employees, how your plan coordinates with Medicare, and whether delaying enrollment makes financial sense for you.",
          "One conversation now can prevent a costly mistake that compounds every month for the rest of your life. We do this at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "what-is-the-medicare-glp1-bridge-program",
    title: "What Is the Medicare GLP-1 Bridge Program?",
    excerpt:
      "Starting July 2026, some Medicare Part D beneficiaries may qualify for lower-cost GLP-1 medications through a special CMS demonstration. Here's what it is, who may qualify, and what it means for your drug coverage.",
    keyTakeaways: [
      "The Medicare GLP-1 Bridge is a temporary CMS demonstration running July 1, 2026 through December 31, 2027.",
      "Qualifying beneficiaries can access certain GLP-1 medications for approximately $50 per month.",
      "Eligibility depends on Medicare enrollment and clinical criteria under FDA labeling and CMS rules.",
    ],
    content: [
      {
        heading: "What Is the Medicare GLP-1 Bridge Program?",
        body: [
          "The Medicare GLP-1 Bridge is a time-limited demonstration program created by the Centers for Medicare & Medicaid Services (CMS). It runs from July 1, 2026 through December 31, 2027, and gives certain eligible Medicare Part D beneficiaries access to selected GLP-1 receptor agonist medications — such as those approved for weight management or cardiovascular risk reduction — at a capped monthly cost of approximately $50.",
          "The program operates outside the standard Part D benefit structure. Rather than running claims through your plan's normal cost-sharing process, CMS pays pharmacies directly through a centralized payment system, which handles prior authorization and claims adjudication separately from your regular Part D plan.",
        ],
      },
      {
        heading: "Which Medications Are Included?",
        body: [
          "The program applies to specific GLP-1 medications that CMS has approved for the demonstration — not all GLP-1 drugs automatically qualify. The list is based on current FDA labeling for approved indications, which currently includes certain uses related to type 2 diabetes management, cardiovascular risk reduction in people with established heart disease, and obesity-related conditions under applicable FDA approvals.",
          "Because CMS controls the formulary for this demonstration, the drug list may differ from what your current Part D plan covers. If you are currently taking a GLP-1 medication, the interaction between this program and your existing drug coverage is worth reviewing carefully.",
        ],
      },
      {
        heading: "Who May Qualify?",
        body: [
          "Eligibility for the GLP-1 Bridge requires both Medicare enrollment with active Part D coverage and meeting clinical criteria tied to an approved indication under current FDA labeling and CMS rules. The specific eligibility requirements — including which diagnoses qualify and what documentation your prescriber may need to submit — will be outlined by CMS closer to the July 2026 start date.",
          "Part D plans do not need to opt into the program. The $50 monthly cost applies through the centralized payment process, and standard Part D rules — including the deductible — do not apply to medications covered under the demonstration.",
        ],
      },
      {
        heading: "What This Means for Your Drug Coverage",
        body: [
          "If you are currently taking or considering a GLP-1 medication, understanding how the Bridge program interacts with your existing Part D or Medicare Advantage plan is important. The program may significantly reduce your out-of-pocket costs for a qualifying medication — but only if the drug you use is included in the demonstration's approved list.",
          "We help clients stay current on Medicare changes like this and understand how new programs affect their specific coverage. If you take a GLP-1 medication or your doctor has discussed one with you, reach out and we'll review your options together — at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "how-does-medicare-cover-insulin",
    title: "How Does Medicare Cover Insulin and What Is the $35 Cap?",
    excerpt:
      "Medicare covers insulin under both Part B and Part D — and recent law changes cap your monthly out-of-pocket cost at $35 per insulin product. Here's how it works and what it means for you.",
    keyTakeaways: [
      "Medicare caps the cost of covered insulin at $35 per month per product under both Part B and Part D.",
      "Part B covers insulin only when used in certain qualifying insulin pumps (DME). Part D covers most other insulin.",
      "The $35 cap applies regardless of which coverage phase you're in and whether or not you have Extra Help.",
    ],
    content: [
      {
        heading: "How Medicare Covers Insulin",
        body: [
          "Medicare covers insulin in two different ways depending on how it is delivered. Part B covers insulin when it is used in certain durable medical equipment (DME) insulin pumps that meet Medicare's coverage criteria. In this case, the insulin is treated as a DME supply and billed under Part B rather than Part D.",
          "Part D covers most other insulin — including insulin used with injection pens, syringes, inhaled insulin, and insulin used with non-DME pumps. If you use insulin by injection or with a device that does not qualify as DME under Medicare's rules, your coverage will almost certainly come through your Part D plan.",
        ],
      },
      {
        heading: "The $35 Monthly Cap",
        body: [
          "Under current federal law, your out-of-pocket cost for a covered insulin product is capped at $35 for a one-month supply — under both Part B and Part D. This cap applies even if you haven't met your Part D deductible. The deductible does not apply to insulin.",
          "For a three-month supply, the cap is generally $105 total for each covered insulin. The $35 limit applies per insulin product, not per prescription, so if you use more than one type of insulin, the cap applies to each one separately.",
        ],
      },
      {
        heading: "What About Insulin Pumps and Devices?",
        body: [
          "The type of pump or delivery device you use affects which part of Medicare covers your insulin. Traditional external insulin pumps that qualify as DME are covered under Part B — and the insulin used in those pumps is also covered under Part B at the $35 cap. However, the pump device itself is subject to its own coverage rules and cost-sharing.",
          "Insulin patch pumps, disposable pumps, and some newer delivery devices are treated as supplies under Part D rather than DME under Part B. In these cases, the insulin is covered under Part D with the $35 cap, but the device or supply may have separate cost-sharing. Understanding how your specific delivery method is classified under Medicare matters for knowing what you'll actually pay.",
        ],
      },
      {
        heading: "Making Sure Your Plan Covers Your Insulin",
        body: [
          "The $35 cap only applies to insulin products that are on your plan's formulary. If your specific insulin is not included in your Part D plan's drug list, you won't have access to the capped price through that plan. This is one reason why reviewing your plan's formulary each year — particularly during Annual Enrollment — is so important.",
          "We help our clients review how their insulin is delivered, confirm that their Part D or Medicare Advantage plan covers the right products, and make sure they're getting access to the $35 cap they're entitled to. If you manage diabetes and take insulin, this is a conversation worth having before your next enrollment period.",
        ],
      },
    ],
  },
  {
    slug: "what-is-medicare-advantage",
    title: "What Is Medicare Advantage?",
    excerpt:
      "Medicare Advantage is an alternative to Original Medicare offered by private insurers. It can look attractive on paper — but the trade-offs matter. Here's what you need to know before enrolling.",
    keyTakeaways: [
      "Medicare Advantage replaces Original Medicare and is run by private insurance companies under contract with the federal government.",
      "Most plans have networks, require referrals, and use prior authorization — limiting your freedom to choose providers.",
      "Plans may offer extra benefits like dental and vision, but coverage can change significantly from year to year.",
    ],
    content: [
      {
        heading: "What Is Medicare Advantage?",
        body: [
          "Medicare Advantage — also called Medicare Part C — is an alternative way to receive your Medicare benefits. Instead of getting coverage directly through the federal government (Original Medicare), you enroll in a private insurance plan that contracts with Medicare to provide your Part A and Part B benefits, and usually Part D (prescription drugs) as well.",
          "Enrollment in Medicare Advantage has grown significantly over the past decade. As of 2025, more than half of all Medicare beneficiaries are enrolled in a Medicare Advantage plan. The appeal is understandable: many plans have $0 premiums and include extras like dental, vision, hearing, and gym memberships that Original Medicare doesn't cover.",
        ],
      },
      {
        heading: "HMO vs. PPO: How Networks Work",
        body: [
          "Most Medicare Advantage plans operate as either an HMO (Health Maintenance Organization) or a PPO (Preferred Provider Organization). With an HMO, you must use doctors and hospitals within the plan's network and typically need a primary care physician referral to see a specialist. Going out of network usually means you pay the full cost yourself.",
          "PPO plans offer more flexibility — you can see out-of-network providers, but at a higher cost. Even with a PPO, you'll generally pay less by staying in-network. If you have established relationships with specific doctors or specialists, verifying that they're in-network before enrolling is critical.",
        ],
      },
      {
        heading: "Prior Authorization: The Hidden Trade-Off",
        body: [
          "One of the most significant — and least discussed — features of Medicare Advantage is prior authorization. Before approving many services, procedures, or specialist referrals, the insurance company requires advance approval. Studies have consistently shown that prior authorization denials are common, and the appeals process can be slow and stressful when you need care quickly.",
          "With Original Medicare, there is no prior authorization requirement for most covered services. If Medicare covers it and your doctor orders it, you generally get it. This difference in control over your own healthcare is a major reason many people with complex medical needs prefer Original Medicare paired with a Medigap plan.",
        ],
      },
      {
        heading: "How Medicare Advantage Compares to Medigap",
        body: [
          "The choice between Medicare Advantage and Original Medicare + Medigap comes down to what you value most. Medicare Advantage often has lower upfront costs and includes extra benefits — but comes with networks, prior authorization, and coverage that can change each January 1. Original Medicare + Medigap offers broader provider access and more predictable costs, but at a higher monthly premium.",
          "There is no single right answer — the best choice depends on your health, your doctors, your prescriptions, and your budget. An independent broker can walk you through a side-by-side comparison based on your specific situation, at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "what-is-irmaa",
    title: "What Is IRMAA?",
    excerpt:
      "Higher-income Medicare beneficiaries pay more for Part B and Part D. This surcharge is called IRMAA — and many people are surprised to learn they owe it. Here's how it works and what you can do if your income has changed.",
    keyTakeaways: [
      "IRMAA is an income-related monthly adjustment amount added to your Part B and Part D premiums if your income exceeds certain thresholds.",
      "The Social Security Administration determines your IRMAA based on your tax return from two years ago.",
      "If your income has dropped due to a qualifying life event, you can appeal using Form SSA-44.",
    ],
    content: [
      {
        heading: "What Is IRMAA?",
        body: [
          "IRMAA stands for Income-Related Monthly Adjustment Amount. It's a surcharge added to your standard Medicare Part B and Part D premiums if your income exceeds a certain threshold. The Social Security Administration (SSA) determines whether you owe IRMAA based on your modified adjusted gross income (MAGI) from your most recent federal tax return on file — typically two years prior.",
          "For 2026, the standard Part B premium is $202.90 per month. Beneficiaries subject to IRMAA pay anywhere from $264.90 to $594.00 per month depending on their income bracket. Part D IRMAA is assessed separately and added on top of whatever your drug plan's premium is.",
        ],
      },
      {
        heading: "Who Pays IRMAA?",
        body: [
          "IRMAA applies to individuals whose MAGI exceeds $106,000 per year (or $212,000 for married couples filing jointly) based on the two-year-old tax return SSA has on file. If your income was above those thresholds in 2024, you may receive an IRMAA determination letter from Social Security before or shortly after your Medicare coverage begins.",
          "The surcharge is tiered — higher income brackets pay progressively more. SSA sends a notice called an IRMAA determination letter that tells you exactly what you owe and when it will take effect.",
        ],
      },
      {
        heading: "What If Your Income Has Changed?",
        body: [
          "Because IRMAA is based on income from two years ago, it can feel unfair when your circumstances have changed significantly. If you've experienced a qualifying life event — such as retirement, divorce, the death of a spouse, loss of income-producing property, or reduced work hours — you may be able to appeal your IRMAA determination and have it based on a more recent year's income instead.",
          "To appeal, you file Form SSA-44 (Medicare Income-Related Monthly Adjustment Amount — Life-Changing Event) with your local Social Security office. You'll need to provide documentation of the life event and an estimate or proof of your more recent income. If approved, your IRMAA surcharge will be adjusted — sometimes eliminated entirely.",
        ],
      },
      {
        heading: "Planning Around IRMAA",
        body: [
          "For people approaching Medicare who are still working or drawing down retirement accounts, income in the years just before age 65 can directly affect what you pay for Medicare. Large Roth conversions, capital gains events, or required minimum distributions can push you into a higher IRMAA bracket — sometimes by a significant amount.",
          "Working with a financial advisor on Medicare-aware income planning before you turn 65 can help you avoid unnecessary IRMAA surcharges. And if you believe you've been assessed IRMAA incorrectly, don't hesitate to appeal — the SSA-44 process exists precisely for situations where the two-year lookback produces an unfair result.",
        ],
      },
    ],
  },
  {
    slug: "veterans-and-medicare",
    title: "Veterans and Medicare: What You Need to Know",
    excerpt:
      "If you're a veteran with VA benefits, you might assume Medicare is redundant. That assumption can be costly. Here's how VA coverage and Medicare interact — and why having both often makes sense.",
    keyTakeaways: [
      "VA benefits do NOT count as creditable coverage for Medicare — failing to enroll on time can result in permanent Part B penalties.",
      "VA drug coverage IS creditable for Part D, meaning you can delay Part D without penalty as long as you maintain VA drug benefits.",
      "Having both VA and Medicare gives you more flexibility — especially for care outside the VA system.",
    ],
    content: [
      {
        heading: "VA Benefits Are Not a Substitute for Medicare Enrollment",
        body: [
          "Many veterans assume that because they have VA healthcare benefits, they can skip Medicare enrollment without consequences. This is one of the most expensive Medicare misconceptions we encounter. The VA is a separate healthcare system — it does not count as Medicare-equivalent coverage for the purpose of Medicare's enrollment rules.",
          "If you delay enrolling in Medicare Part B without a qualifying reason (such as active employer coverage), you will face a permanent late enrollment penalty of 10% per year of delay. VA benefits, TRICARE for Life, and other military healthcare programs generally do not protect against this penalty on their own.",
        ],
      },
      {
        heading: "VA Drug Coverage and Part D",
        body: [
          "There is one important exception: VA prescription drug coverage IS considered creditable coverage for Medicare Part D. This means that if you receive prescription drugs through the VA and you're satisfied with that coverage, you can delay enrolling in a standalone Part D plan without incurring a late enrollment penalty — for as long as you maintain your VA drug benefits.",
          "If you ever lose VA drug eligibility or want to switch to a Part D plan, you'll have a Special Enrollment Period to do so without penalty. Keep documentation of your VA drug coverage in case you need to prove creditable coverage status later.",
        ],
      },
      {
        heading: "Why Having Both VA and Medicare Makes Sense",
        body: [
          "Even veterans who receive most of their care through the VA can benefit from having Medicare. VA coverage generally only applies to care received at VA facilities or authorized through the VA. If you need to see a specialist outside the VA system, receive emergency care away from a VA facility, or want access to a broader network of providers, Medicare becomes essential.",
          "Medicare also provides a safety net during VA wait times, when traveling, or when you simply prefer to see a community provider. For veterans eligible for TRICARE for Life, having Medicare Part B is actually required to maintain that coverage — another reason to enroll on time.",
        ],
      },
      {
        heading: "The Bottom Line for Veterans",
        body: [
          "If you're a veteran approaching Medicare eligibility, don't assume your VA benefits cover everything Medicare would. Enroll in Part A and Part B on time to avoid permanent penalties. Then decide whether to add a Medigap plan, Medicare Advantage, or Part D coverage based on how you use your VA benefits and where you receive care.",
          "Every veteran's situation is different. We work with many veterans in South Florida and can help you sort out exactly what you need — and what you can skip — at no cost to you.",
        ],
      },
    ],
  },
  {
    slug: "does-medicare-cover-travel",
    title: "Does Medicare Cover Medical Care While Traveling?",
    excerpt:
      "Planning a trip? Understanding how Medicare works — and doesn't work — outside your home area can help you avoid a very expensive surprise.",
    keyTakeaways: [
      "Original Medicare covers you anywhere in the United States — including U.S. territories.",
      "Medicare generally does NOT cover medical care outside the United States, with very narrow exceptions.",
      "Medicare Plan G includes a foreign travel emergency benefit that covers 80% of emergency care abroad, up to $50,000 lifetime.",
    ],
    content: [
      {
        heading: "Domestic Travel: You're Covered",
        body: [
          "If you travel within the United States — including Alaska, Hawaii, and U.S. territories like Puerto Rico and the U.S. Virgin Islands — Original Medicare travels with you. Medicare is a federal program, so any provider who accepts Medicare anywhere in the country must treat you at Medicare rates. You don't need to notify Medicare or do anything special before traveling domestically.",
          "This is one of the key advantages of Original Medicare paired with a Medigap plan. Unlike Medicare Advantage plans, which typically have narrow regional networks, Original Medicare gives you access to any Medicare-participating provider in the country — useful if you travel frequently or split time between states.",
        ],
      },
      {
        heading: "International Travel: Generally Not Covered",
        body: [
          "Outside the United States, Original Medicare generally does not pay for medical care. If you get sick or injured in another country, you will typically be responsible for 100% of the cost unless you have supplemental coverage that includes foreign travel benefits.",
          "There are narrow exceptions: Medicare may cover care in a foreign hospital if you're in the U.S. and the foreign hospital is closer than the nearest U.S. hospital that can treat your condition, or if you're traveling through Canada between Alaska and another U.S. state. These exceptions are uncommon in practice.",
        ],
      },
      {
        heading: "Plan G's Foreign Travel Emergency Benefit",
        body: [
          "Medicare Supplement Plan G includes a foreign travel emergency benefit that many beneficiaries don't realize they have. After a $250 calendar-year deductible, Plan G covers 80% of the cost of medically necessary emergency care outside the United States — up to a $50,000 lifetime maximum.",
          "To qualify, the care must be an emergency that begins during the first 60 days of each trip outside the U.S. This benefit won't replace dedicated international travel insurance for extended trips, but it provides meaningful protection for shorter international travel — a cruise, a European vacation, or a trip to visit family abroad.",
        ],
      },
      {
        heading: "Medicare Advantage and Travel",
        body: [
          "If you have a Medicare Advantage plan, your coverage outside your plan's service area is generally limited to emergency and urgent care — and even that may involve higher cost-sharing or prior authorization requirements. Routine or non-urgent care outside your area will typically not be covered.",
          "For people who travel frequently, this network restriction is one of the most common reasons to reconsider Medicare Advantage in favor of Original Medicare with a Medigap plan. If international travel is a regular part of your retirement, it's worth discussing your travel habits when reviewing your Medicare options.",
        ],
      },
    ],
  },
];

export function getFAQBySlug(slug: string): FAQ | undefined {
  return FAQS.find((faq) => faq.slug === slug);
}
