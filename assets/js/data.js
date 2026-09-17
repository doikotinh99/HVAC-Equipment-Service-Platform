const siteData = {
  quickBenefits: [
    { icon: "#icon-clock", title: "24-Hour Service", desc: "Ready around the clock" },
    { icon: "#icon-dollar", title: "No Service Call Fee", desc: "Free travel to your door" },
    { icon: "#icon-shield", title: "Boiler Specialists", desc: "Hydronic-certified masters" },
    { icon: "#icon-home", title: "Same-Price OT", desc: "Fair honest flat rates" }
  ],

  services: [
    {
      featured: true,
      category: "repair",
      icon: "#icon-fire",
      badge: "24/7 Priority Emergency",
      metric: "< 2hr Dispatch",
      img: "assets/images/boiler-img-1.jpg",
      alt: "Boiler burner flame diagnostic service",
      title: "Boiler Repair & Emergency Diagnostics",
      desc: "Fast diagnostics, repair, and emergency heat restoration for steam and hydronic boiler systems across Joliet and Will County.",
      highlights: [
        "24/7 Priority dispatch for zero-heat emergencies",
        "ASME & Hydronic certified heating specialists",
        "Calibrated flue-gas combustion analyzer diagnostics",
        "Zero travel charge with flat-rate upfront quotes"
      ],
      checklist: [
        "24/7 live local dispatch across Will County",
        "Upfront pricing with zero door trip charge",
        "Fully-stocked service trucks with factory replacement parts"
      ],
      specs: ["Steam & Hot Water", "Hartford Loop Rebuild", "ASME 30-PSI Valves"],
      link: "boiler-repair.html",
      linkText: "Repair Details",
      btnClass: "btn btn-primary"
    },
    {
      category: "installation",
      icon: "#icon-building",
      badge: "96% AFUE Condensing",
      metric: "Up to $1,500 Rebate",
      img: "assets/images/boiler-cascade.jpg",
      alt: "Boiler installation high efficiency cascade plant",
      title: "Boiler Installation & Replacement",
      desc: "High-efficiency condensing boilers offering up to 96% AFUE rating, custom primary/secondary hydraulic separation, and outdoor reset.",
      checklist: [
        "Manual J heat-loss engineering for optimal sizing",
        "Custom hydraulic separation & zoning manifolds",
        "Rebate assistance with local gas utility programs"
      ],
      specs: ["Condensing Combi", "Outdoor Reset Sensor", "Hydraulic Separator"],
      link: "boiler-installation.html",
      linkText: "Install Details",
      btnClass: "btn btn-cyan"
    },
    {
      category: "maintenance",
      icon: "#icon-shield",
      badge: "Seasonal Protection SLA",
      metric: "Zero Freeze Risk",
      img: "assets/images/boiler-pumps.jpg",
      alt: "Boiler preventative maintenance and pump service",
      title: "Preventative Maintenance Plans",
      desc: "Combustion analysis, heat exchanger flushes, low water cutoff testing, and pump safety limit inspections.",
      checklist: [
        "Low water cutoff testing and sediment flush",
        "Carbon monoxide and flue gas verification",
        "Priority scheduling during winter freeze alerts"
      ],
      specs: ["Flue-Gas Analysis", "LWCO Automatic Feeder", "Circulator Head Balance"],
      link: "maintenance.html",
      linkText: "Explore Maintenance",
      btnClass: "btn btn-outline"
    },
    {
      category: "commercial",
      icon: "#icon-tools",
      badge: "Industrial & Cascade",
      metric: "Multi-Boiler BMS",
      img: "assets/images/boiler-img-9.jpg",
      alt: "Commercial boiler and automation control panel",
      title: "Commercial & Multi-Family Boilers",
      desc: "Cascade hydronic systems, multi-family steam plants, and commercial heating retrofits requiring heavy-duty continuous heating.",
      checklist: [
        "Cascade multiple boiler management systems",
        "Steam radiator plant maintenance & valve replacements",
        "Dedicated commercial SLA response"
      ],
      specs: ["Cascade Relay Mod", "Steam Trap Surveys", "NEMA Control Panels"],
      link: "commercial-boilers.html",
      linkText: "Commercial Solutions",
      btnClass: "btn btn-outline"
    },
    {
      category: "hvac",
      icon: "#icon-snowflake",
      badge: "Dual Fuel & HVAC",
      metric: "Year-Round Comfort",
      img: "assets/images/furnace-ac.jpg",
      alt: "Furnace and central air conditioning equipment",
      title: "Furnace & Central Air Conditioning",
      desc: "Residential gas-furnace repair, heat exchanger safety inspections, and central air-conditioning maintenance.",
      checklist: [
        "Heat exchanger carbon monoxide safety audits",
        "Multi-speed blower motor and draft inducer replacements",
        "Seasonal AC tune-ups and refrigerant pressure balancing"
      ],
      specs: ["Heat Exchanger Audit", "Draft Inducer Fans", "Refrigerant Balancing"],
      link: "contact.html?service=furnace",
      linkText: "Furnace Service",
      btnClass: "btn btn-outline"
    },
    {
      category: "water",
      icon: "#icon-droplet",
      badge: "Continuous On-Demand",
      metric: "5.4 GPM Constant",
      img: "assets/images/boiler-img-10.jpg",
      alt: "Water heating and commercial filtration skid",
      title: "Water Heating & Combi Appliances",
      desc: "Tankless water-heater installations, combi space/domestic water systems, and commercial rooftop HVAC units.",
      checklist: [
        "Endless hot water up to 5.4 GPM on demand",
        "Space-saving wall-hung dual condensing exchangers",
        "Commercial rooftop package unit maintenance"
      ],
      specs: ["Tankless Descaling", "Dual Heat Exchanger", "Rooftop Package RTU"],
      link: "products.html",
      linkText: "Browse Equipment",
      btnClass: "btn btn-outline"
    }
  ],

  photoGallery: [
    {
      id: "project-1",
      category: "combustion",
      img: "assets/images/boiler-img-1.jpg",
      alt: "Boiler burner flame combustion analysis and sensor calibration",
      badge: "Combustion Analysis",
      metric: "98% Efficiency",
      icon: "#icon-fire",
      color: "var(--coral)",
      title: "Burner & Flame Diagnostics",
      location: "Joliet Historic District",
      desc: "Digital draft calibration, flame sensor testing, and burner overhaul for maximum fuel economy and zero soot.",
      tags: ["Combustion Test", "Flame Tuning", "ASME Safety"],
      details: {
        scope: "Full combustion efficiency testing, draft regulator calibration, flame rectifier sensor testing, and burner injector cleaning.",
        equipment: "Bacharach Insight Plus Electronic Combustion Analyzer & Fieldpiece Dual-Port Digital Manometer.",
        result: "Achieved 98% clean combustion efficiency and completely eliminated soot & unburned fuel emissions."
      }
    },
    {
      id: "project-2",
      category: "cascade",
      img: "assets/images/boiler-cascade.jpg",
      alt: "Commercial multi-unit cascade boiler plant mechanical room",
      badge: "Commercial Cascade",
      metric: "4-Unit Modulating",
      icon: "#icon-building",
      color: "var(--cyan)",
      title: "Commercial Multi-Unit Plant",
      location: "Plainfield Commercial Hub",
      desc: "High-output modular condensing cascade array with primary/secondary piping, insulated headers, and outdoor reset.",
      tags: ["Cascade Array", "Outdoor Reset", "95.5% AFUE"],
      details: {
        scope: "4-boiler modulating condensing cascade synchronization, primary/secondary loop headers, and outdoor reset curve integration.",
        equipment: "Weil-McLain Evergreen condensing modules, hydraulic separator, and insulated commercial headers.",
        result: "Delivered 95.5% seasonal thermal efficiency with continuous N+1 automated heating redundancy."
      }
    },
    {
      id: "project-3",
      category: "hydronics",
      img: "assets/images/boiler-pumps.jpg",
      alt: "Commercial hydronic circulation pumps and manifold array",
      badge: "Circulation Stations",
      metric: "Dual Redundancy",
      icon: "#icon-tools",
      color: "var(--blue)",
      title: "Hydronic Pumps & Manifolds",
      location: "Shorewood Medical Center",
      desc: "High-flow bronze circulator pump skid with expansion tanks, air scrubbers, and balanced multi-zone distribution.",
      tags: ["Bronze Pumps", "Air Scrubber", "Zero Head Loss"],
      details: {
        scope: "Commercial circulation pump skid replacement, dual bronze pump manifold with check valves, and air elimination scrubber.",
        equipment: "Bell & Gossett Series e-1510 bronze circulator pumps and Spirovent micro-bubble air separator.",
        result: "Eliminated cavitation noise and balanced flow across 12 heating zones with zero head loss."
      }
    },
    {
      id: "project-4",
      category: "controls",
      img: "assets/images/boiler-img-9.jpg",
      alt: "Mechanical room electrical controls and automation panel",
      badge: "Automation Panel",
      metric: "BMS Integrated",
      icon: "#icon-bolt",
      color: "var(--yellow)",
      title: "Automation & Safety Relays",
      location: "Joliet Industrial Facility",
      desc: "Custom NEMA enclosure, automated zoning relay panels, and low-water cutoff safety interlocks with emergency trip.",
      tags: ["NEMA Controls", "Zone Relays", "BMS Interlock"],
      details: {
        scope: "Custom NEMA panel wiring, automated emergency low-water cutoff safety circuit, and building management system (BMS) relay tie-in.",
        equipment: "McDonnell & Miller Series 150 low-water cutoffs, Taco zone switching relays, and emergency manual disconnect.",
        result: "Full ASME Section IV code compliance with automated fault alerting to the central facility control desk."
      }
    }
  ],

  partners: [
    {
      badge: "Equipment Brands",
      title: "Carrier, Trane & Weil-McLain",
      desc: "Full factory warranty compliance, OEM replacement parts, and advanced diagnostic digital manifolds."
    },
    {
      badge: "Partner Network",
      title: "Jerry's Heating & Cooling of Plainfield",
      desc: "Direct service line: 815-791-7447. Partnering for expanded residential and light-commercial coverage."
    },
    {
      badge: "Water & Hydronics",
      title: "PureFlo Plumbing & Water",
      desc: "Specialized in commercial boiler chemical water treatment, filtration, and hydronic backflow prevention."
    },
    {
      badge: "Commercial HVAC",
      title: "Arctic Comfort & SunWarm",
      desc: "Commercial rooftop units, heavy-duty boiler cascade systems, and historical building heat restorations."
    }
  ],

  faq: [
    {
      q: "What boiler services do you offer?",
      a: "Boiler repair, boiler installation, preventative maintenance, and support for all water-heating appliances including combi and radiant floor systems."
    },
    {
      q: "Is 24-hour service available?",
      a: "Yes. We operate 24/7/365 emergency live dispatch across Joliet and Will County. Our maintenance plans also include guaranteed priority dispatch during winter alerts."
    },
    {
      q: "Do you charge a service-call fee?",
      a: "No. Repairs Boilers maintains a strict policy: there is no service-call fee or trip charge to come to your door. You receive a clear, upfront quote before any work begins."
    },
    {
      q: "Do you service more than boilers?",
      a: "Yes. Services listed include residential gas furnaces, central air-conditioning systems, tankless water heaters, and commercial rooftop units."
    },
    {
      q: "Where are you located?",
      a: "Our main local facility is located at <strong>1504 Essington Road, Unit 3, Joliet, Illinois 60435</strong>, dispatching vans throughout Will County."
    }
  ],

  accordionModules: [
    {
      id: "mod-1",
      title: "01. Location Types We Service (Property & Facility Types)",
      description: "Explore specific heating, cooling, and hydronic solutions tailored to your property:",
      type: "nested",
      items: [
        {
          trigger: "Residential Services We Offer",
          content: "Residential heating, cooling and maintenance service information for single-family homes, historic steam radiator residences, and townhomes."
        },
        {
          trigger: "Commercial Services We Offer",
          content: "Commercial HVAC service, cascade boilers, and maintenance information for retail, offices, and multi-tenant properties."
        },
        {
          trigger: "Light Industrial Services We Offer",
          content: "Service information for light-industrial heating, unit heaters, and cooling distribution systems."
        },
        {
          trigger: "Industrial Services We Offer",
          content: "Heavy-duty plant service, steam boilers, high-pressure hydronic loops, and facility maintenance."
        }
      ]
    },
    {
      id: "mod-2",
      title: "02. Areas We Service (Will County & Surrounding Communities)",
      description: "Certified local technicians dispatched daily to the following client-approved service locations:",
      type: "tags",
      tags: [
        "Joliet (60435, 60431, 60436)",
        "Plainfield",
        "Shorewood",
        "Lockport",
        "Crest Hill",
        "Romeoville",
        "New Lenox"
      ]
    },
    {
      id: "mod-3",
      title: "03. HVAC Services We Offer",
      description: "Complete heating and cooling capabilities engineered for Illinois climate:",
      type: "checklist",
      items: [
        "Boiler repair, rebuild, and high-efficiency installation",
        "Gas furnace repair, heat exchanger certification, and duct inspection",
        "Central air conditioning tune-up, Freon leak check, and condenser replacement",
        "Tankless water heater descaling, power venting, and indirect water tanks"
      ]
    },
    {
      id: "mod-4",
      title: "04. Maintenance Plans & Seasonal Care",
      description: "Choose from our Essential Tune-Up, Hydronic Shield Care, or Commercial Facility SLA to safeguard against freeze-up emergencies.",
      type: "simple"
    },
    {
      id: "mod-5",
      title: "05. Customer Help & Scheduling Paths",
      description: "24-hour live phone dispatch at <strong>(815) 846-1007</strong> or instant web booking form with zero travel fee.",
      type: "simple"
    }
  ],

  trustTags: [
    { icon: "#icon-map-pin", text: "1504 Essington Road, Unit 3, Joliet, IL 60435" },
    { icon: "#icon-clock", text: "24/7 Emergency Boiler Service" },
    { icon: "#icon-shield", text: "Licensed & Insured" }
  ],

  aboutStats: [
    {
      number: "20+",
      label: "Years of Boiler Mastery",
      desc: "Specialized exclusively in hydronic boilers and radiant heat loops since 2005."
    },
    {
      number: "4,800+",
      label: "Boilers Restored & Serviced",
      desc: "Historic steam systems, high-efficiency condensing units, and commercial cascades."
    },
    {
      number: "< 45m",
      label: "Average Emergency SLA",
      desc: "Stocked response vans dispatched directly from our central Joliet warehouse."
    },
    {
      number: "$0",
      label: "Door Trip Charge Policy",
      desc: "Transparent flat-rate pricing with zero travel fees anywhere across Will County."
    }
  ],

  operationalCommitments: [
    {
      num: "01.",
      title: "Never A Service Call / Trip Fee",
      desc: "We diagnose your heating system at your home or commercial facility and present a guaranteed, written flat-rate quote before any work starts. No surprises, no hidden diagnostic fees."
    },
    {
      num: "02.",
      title: "24/7/365 Emergency Dispatch",
      desc: "Illinois freeze snaps can drop indoor temperatures below freezing in hours, risking burst hydronic pipes. Our Joliet fleet is staffed around the clock, 365 days a year."
    },
    {
      num: "03.",
      title: "100% Satisfaction & 1-Year Warranty",
      desc: "Every repair, rebuilt valve assembly, and heat exchanger replacement is backed by our full 1-year parts and labor guarantee for complete winter peace of mind."
    }
  ],

  processSteps: [
    {
      num: "01",
      icon: "#icon-headphones",
      title: "24/7 Live Triage & Dispatch",
      desc: "Connect directly with an experienced hydronic specialist. We diagnose your symptoms over the phone and dispatch a fully stocked van from Joliet within 45 minutes.",
      badge: "Instant SLA Response",
      highlight: false
    },
    {
      num: "02",
      icon: "#icon-search",
      title: "Digital Combustion & Loop Audit",
      desc: "Our master technician tests combustion draft, checks manifold gas pressure, verifies low-water cutoffs, and checks hydronic flow with zero door trip charge.",
      badge: "Calibrated Instruments",
      highlight: false
    },
    {
      num: "03",
      icon: "#icon-dollar",
      title: "Upfront Flat-Rate Written Quote",
      desc: "You receive an exact, transparent quote detailing the required factory OEM parts and labor before any work begins. No guesswork, no hourly price surprises.",
      badge: "Zero Trip Fee Guarantee",
      highlight: true
    },
    {
      num: "04",
      icon: "#icon-shield",
      title: "ASME-Grade Repair & Warranty",
      desc: "Work is completed using genuine manufacturer parts, followed by hydronic air purging, pressure balancing, carbon monoxide testing, and our 1-year warranty.",
      badge: "1-Year Protection",
      highlight: false
    }
  ],

  coreStandards: [
    {
      icon: "#icon-dollar",
      title: "Zero Travel or Door Fee",
      desc: "We never penalize customers for living in Will County with trip fees or fuel surcharges. Our technicians arrive, inspect, and quote without financial barriers."
    },
    {
      icon: "#icon-award",
      title: "Licensed & ASME Certified",
      desc: "State of Illinois licensed mechanical contractor with certified ASME Section IV welders and EPA Section 608 Universal technicians."
    },
    {
      icon: "#icon-clock",
      title: "24/7 Sub-Zero Readiness",
      desc: "When Arctic cold fronts hit Joliet and Will County, our emergency dispatch centers remain fully manned with warehouse parts access 24 hours a day."
    },
    {
      icon: "#icon-package",
      title: "Genuine OEM Replacement Parts",
      desc: "We only install factory-approved OEM components from Weil-McLain, Carrier, Trane, Navien, Taco, and Honeywell to preserve factory warranties."
    },
    {
      icon: "#icon-sparkles",
      title: "Clean Mechanical Room Etiquette",
      desc: "Our technicians wear protective shoe covers, lay durable floor runners, and leave your boiler room cleaner and more organized than when we arrived."
    },
    {
      icon: "#icon-fire",
      title: "96% AFUE High-Efficiency Focus",
      desc: "Specialized in modern condensing boilers, modulating burner cascades, and outdoor reset controls that cut heating fuel costs by up to 35%."
    }
  ],

  team: [
    {
      icon: "#icon-tools",
      role: "Master Mechanical Contractor",
      name: "Marcus Vance",
      desc: "Over 24 years directing hydronic mechanical projects. Specializes in ASME Section IV commercial steam plants, historic radiator restorations, and heavy piping manifolds.",
      badges: ["ASME Certified", "Master License", "24 Yrs Exp"]
    },
    {
      icon: "#icon-fire",
      role: "Lead Combustion Engineer",
      name: "Elena Rostova",
      desc: "Expert in modulating gas burner diagnostics, digital combustion analysis, low NOx tuning, and ultra-high efficiency 96% AFUE condensing boiler installations.",
      badges: ["EPA Universal", "Flue Gas Analyst", "NATE Certified"]
    },
    {
      icon: "#icon-bolt",
      role: "Controls & Cascade Specialist",
      name: "David Chen",
      desc: "Specializes in commercial boiler automation, NEMA control enclosures, primary/secondary hydraulic separation, and building management system (BMS) integration.",
      badges: ["BMS Controls", "Cascade Array", "Low-Water Safety"]
    },
    {
      icon: "#icon-headphones",
      role: "Emergency Dispatch Director",
      name: "Thomas Miller",
      desc: "Coordinates 24/7 winter emergency response across Joliet and Will County. Ensures our mobile response vans reach zero-heat emergencies with priority SLA.",
      badges: ["24/7 Dispatch", "Will County SLA", "Fleet Logistics"]
    }
  ],

  testimonials: [
    {
      stars: 5,
      quote: "Our 1920s steam boiler lost heat on a -5°F January night. Two other HVAC companies said it was beyond repair and wanted $14,000 for a rushed furnace replacement. Repairs Boilers arrived in 40 minutes, diagnosed a seized low-water cutoff and cracked Hartford loop, rebuilt it on-site with OEM parts, and our radiators were hot before dawn.",
      initials: "RM",
      name: "Robert & Eleanor Miller",
      location: "Cathedral District, Joliet, IL",
      icon: "#icon-map-pin"
    },
    {
      stars: 5,
      quote: "We manage an 8-unit commercial retail center with a 4-boiler cascade array. Repairs Boilers redesigned our primary/secondary headers, installed outdoor reset sensors, and balanced all circulating loops. Our natural gas bills dropped by 34% this winter and tenant comfort complaints dropped to zero.",
      initials: "MS",
      name: "Mark Stevens",
      location: "Facilities Director, Plainfield, IL",
      icon: "#icon-building"
    },
    {
      stars: 5,
      quote: "Replaced our noisy 30-year-old boiler with a Navien 96% AFUE condensing combi unit. The crew was impeccably clean, laid protective runners throughout our basement, and finished in one day. The zero door fee policy and upfront pricing made the whole experience stress-free.",
      initials: "SK",
      name: "Sarah Kowalski",
      location: "Residential Client, Shorewood, IL",
      icon: "#icon-map-pin"
    }
  ],

  serviceCities: [
    "Joliet (60435, 60431, 60436)",
    "Plainfield",
    "Shorewood",
    "Lockport",
    "Crest Hill",
    "Romeoville",
    "New Lenox",
    "Channahon",
    "Minooka",
    "Bolingbrook"
  ]
};

if (typeof window !== 'undefined') {
  window.siteData = siteData;
}
