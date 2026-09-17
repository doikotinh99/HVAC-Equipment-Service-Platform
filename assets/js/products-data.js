/**
 * HVAC Equipment Catalog - Product Master Data (Extended Benchmark Dataset)
 * Complete technical parameters, bundle matrices, 2-tier specs,
 * vendor assignments, and pricing for all 35 catalog equipment models.
 */

const BOILER_PRODUCTS = [
  {
    "id": "carrier-infinity-98",
    "name": "Carrier Infinity® 98 Modulating Gas Furnace, Cased Coil & 24 SEER2 Condenser System",
    "brand": "Carrier",
    "category": "hvac-systems",
    "categoryName": "Complete HVAC Systems",
    "description": "Factory-engineered Carrier Infinity® residential split system featuring the 98.5% AFUE modulating gas furnace, cased N-coil, and ultra-high efficiency 24 SEER2 Puron Advance™ variable-speed condenser.",
    "image": "assets/images/furnace-ac.jpg",
    "badge": "Factory Engineered",
    "tag": "98.5% AFUE / 24 SEER2",
    "tagClass": "badge-cyan",
    "efficiency": "98.5% AFUE / 24 SEER2",
    "btu": "80,000 BTU / 4.0 Ton",
    "price_from": 8450,
    "monthly_financing": 129,
    "rebateAmount": 1800,
    "warranty": "10-Yr Parts Warranty",
    "a2lReady": true,
    "energyStar": true,
    "reviewsCount": 287,
    "rating": 4.9,
    "vendor": {
      "name": "Blue Flame Heating & Cooling",
      "subtitle": "Premier Factory Authorized Carrier Dealer",
      "rating": 4.9,
      "reviews": 312,
      "status": "Local Delivery Included",
      "earliestInstall": "Thursday, Oct 19",
      "phone": "(815) 556-0660",
      "district": "Chicago North & Northwest Suburbs",
      "scope": "Includes municipal mechanical permits, certified install, old equipment haul-away & 1-year labor guarantee.",
      "logo": "assets/images/logos/blue_frame.jpg"
    },
    "bundleMatrix": {
      "furnace": {
        "code": "F",
        "model": "59MN7A080V21",
        "name": "Furnace",
        "specs": "80k BTU | Modulating Gas Valve | Variable ECM",
        "badge": "98.5% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "coil": {
        "code": "C",
        "model": "CNPVP4821ALA",
        "name": "Evaporator Coil",
        "specs": "3.5 - 4.0 Ton | Cased Upflow/Downflow N-Coil",
        "badge": "4.0 Ton",
        "badgeClass": "pdp-chip-cyan"
      },
      "condenser": {
        "code": "A",
        "model": "24VNA648A003",
        "name": "Condenser",
        "specs": "4.0 Ton | 24 SEER2 Variable Speed | Puron Advance™",
        "badge": "24 SEER2",
        "badgeClass": "pdp-chip-cyan"
      },
      "waterHeater": {
        "code": "W",
        "model": "Performance Plus™",
        "name": "Water Heater",
        "specs": "50-Gal Hybrid Electric Heat Pump Water Heater | 3.75 UEF",
        "badge": "3.75 UEF",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 1850,
        "financeAdd": 29
      }
    },
    "componentSpecs": {
      "furnace": {
        "title": "Furnace",
        "model": "59MN7A080V21",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "98.5% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-fire"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "80,000 BTU",
            "sub": "78,000 BTU Nominal Output",
            "color": "var(--cyan)",
            "icon": "icon-bolt"
          },
          {
            "label": "MOTOR & COMPRESSOR",
            "value": "Variable ECM",
            "sub": "Greenspeed® Intel (40-100%)",
            "color": "var(--text-white)",
            "icon": "icon-fan"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.4 dBA",
            "sub": "Ultra-Quiet Sound Blanket",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "35.0\" × 21.0\" × 29.5\""
          },
          {
            "label": "Shipping Weight",
            "val": "158 lbs"
          },
          {
            "label": "Electrical Supply",
            "val": "115V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Blower Motor Spec",
            "val": "3/4 HP ECM Variable-Speed"
          },
          {
            "label": "Flue Vent Requirement",
            "val": "2\" to 3\" PVC / CPVC Sch 40"
          },
          {
            "label": "Refrigerant Compatibility",
            "val": "R-454B Puron Advance™ Ready",
            "highlight": "var(--cyan)"
          },
          {
            "label": "A2L Safety Standard",
            "val": "Factory Leak Detection Kit",
            "highlight": "var(--green)"
          },
          {
            "label": "Configuration",
            "val": "Multi-Position Up / Down / Horiz"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#20849102",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "coil": {
        "title": "Evaporator Coil",
        "model": "CNPVP4821ALA",
        "bento": [
          {
            "label": "NOMINAL TONNAGE",
            "value": "4.0 Ton",
            "sub": "3.5 - 4.0 Ton Matched Circuit",
            "color": "var(--cyan)",
            "icon": "icon-snowflake"
          },
          {
            "label": "COIL ARCHITECTURE",
            "value": "Cased N-Coil",
            "sub": "Upflow / Downflow Multi-Position",
            "color": "var(--text-white)",
            "icon": "icon-package"
          },
          {
            "label": "CONSTRUCTION METALLURGY",
            "value": "Vertex™ Al",
            "sub": "Corrosion-Proof Aluminum Armor",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "METERING DEVICE",
            "value": "Factory TXV",
            "sub": "Puron Advance™ R-454B Matched",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "24.5\" × 21.0\" × 21.5\""
          },
          {
            "label": "Cased Fin Material",
            "val": "All-Aluminum Vertex™ Tubing"
          },
          {
            "label": "Drain Pan Type",
            "val": "Sloped High-Temp Polymer (Zero Rust)"
          },
          {
            "label": "Expansion Valve",
            "val": "Hard-Shutoff Factory R-454B TXV"
          },
          {
            "label": "Refrigerant Compatibility",
            "val": "R-454B Puron Advance™ Ready",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Connection Line Sets",
            "val": "3/8\" Liquid / 7/8\" Suction Sweat"
          },
          {
            "label": "Airflow Rating",
            "val": "Up to 1,750 CFM Nominal"
          },
          {
            "label": "AHRI Match System",
            "val": "System ID #20849102",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "condenser": {
        "title": "Condenser",
        "model": "24VNA648A003",
        "bento": [
          {
            "label": "COOLING EFFICIENCY",
            "value": "24 SEER2",
            "sub": "Up to 16.0 EER2 Peak Performance",
            "color": "var(--green)",
            "icon": "icon-snowflake"
          },
          {
            "label": "COOLING CAPACITY",
            "value": "48,000 BTU",
            "sub": "4.0 Ton Variable Modulation",
            "color": "var(--cyan)",
            "icon": "icon-fan"
          },
          {
            "label": "COMPRESSOR TYPE",
            "value": "Inverter Rotary",
            "sub": "Greenspeed® 25-100% Modulating",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "51 dBA",
            "sub": "Silencer System II™ Acoustic Hood",
            "color": "var(--green)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "43.2\" × 35.0\" × 35.0\""
          },
          {
            "label": "Operating Weight",
            "val": "242 lbs"
          },
          {
            "label": "Refrigerant Charge",
            "val": "Puron Advance™ (R-454B Low-GWP)",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Compressor Inverter Drive",
            "val": "5-Stage DC Variable Modulation"
          },
          {
            "label": "Electrical Supply",
            "val": "208/230V / 35A Minimum Circuit"
          },
          {
            "label": "Coil Fin Protection",
            "val": "WeatherArmor Ultra™ Tough Finish"
          },
          {
            "label": "Low Ambient Cooling",
            "val": "Down to 0°F with Infinity Control"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#20849102",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "waterHeater": {
        "title": "Water Heater",
        "model": "Performance Plus™",
        "bento": [
          {
            "label": "ENERGY FACTOR",
            "value": "3.75 UEF",
            "sub": "Tier 4 Super-High Efficiency",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "STORAGE CAPACITY",
            "value": "50 Gallons",
            "sub": "65 Gal 1st Hour Rating Delivery",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAT PUMP HYBRID",
            "value": "4 Auto Modes",
            "sub": "Heat Pump / Hybrid / Electric / Vacation",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "EST. ANNUAL COST",
            "value": "$104 / year",
            "sub": "Saves up to $4,200 over 10 years",
            "color": "var(--green)",
            "icon": "icon-dollar"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × Dia)",
            "val": "67.0\" × 22.25\""
          },
          {
            "label": "Storage Tank Capacity",
            "val": "50 US Gallons"
          },
          {
            "label": "Uniform Energy Factor (UEF)",
            "val": "3.75 UEF (ENERGY STAR®)",
            "highlight": "var(--green)"
          },
          {
            "label": "Electrical Supply",
            "val": "240V / 30A Dedicated Circuit"
          },
          {
            "label": "Compressor Type",
            "val": "R-134a Rotary Heat Pump"
          },
          {
            "label": "Water Connections",
            "val": "3/4\" NPT Top Connections"
          },
          {
            "label": "Sound Rating",
            "val": "49 dBA Whisper Operation"
          },
          {
            "label": "Warranty Coverage",
            "val": "10-Year Limited Tank & Parts"
          }
        ]
      }
    },
    "features": [
      "98.5% AFUE modulating gas furnace paired with 24 SEER2 variable-speed cooling",
      "Puron Advance™ (R-454B) Low-GWP refrigerant future-proofed for 2025+ EPA regulations",
      "Smart Greenspeed® intelligence constantly modulates output for ultra-quiet operation",
      "Turnkey local certified installation with municipal permits and old equipment haul-away"
    ],
    "specs": {
      "Furnace Model": "59MN7A080V21 (80,000 BTU)",
      "Coil Model": "CNPVP4821ALA (4.0 Ton Cased)",
      "Condenser Model": "24VNA648A003 (24 SEER2 Inverter)",
      "Refrigerant": "R-454B Puron Advance™",
      "Warranty": "10-Year Factory Limited Parts",
      "AHRI Certified": "#20849102"
    },
    "gallery": [
      "assets/images/furnace-ac.jpg",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    "id": "bosch-greenstar-100",
    "name": "Bosch Greenstar ZBR Combi 100",
    "brand": "Bosch",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "Compact German-engineered wall-hung condensing combi boiler with patented Al-Si alloy heat exchanger for quiet, efficient domestic heat and on-demand hot water.",
    "image": "assets/images/boiler-img-5.jpg",
    "badge": "German Tech",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "100,000 BTU",
    "price_from": 3950,
    "rebateAmount": 900,
    "features": [
      "Ultra-quiet 38 dB operation fits compact mechanical closets",
      "Aluminum-silicon heat exchanger maximizes thermal conductivity",
      "Continuous domestic hot water at 3.2 GPM @ 70°F rise",
      "Outdoor reset temperature curve tuning sensor included"
    ],
    "specs": {
      "Brand": "Bosch",
      "Capacity": "100,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "3.2 GPM Continuous",
      "Warranty": "Lifetime Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Townhomes, small single-family homes & condos"
    },
    "monthly_financing": 66,
    "rating": 4.9,
    "reviewsCount": 138,
    "gallery": [
      "assets/images/boiler-img-5.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Bosch-100000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Bosch Greenstar ZBR Combi 100",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "100,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "bosch-greenstar-151",
    "name": "Bosch Greenstar ZBR Combi 151",
    "brand": "Bosch",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "High-capacity condensing combi boiler designed for medium-to-large homes requiring simultaneous multi-bath hot water and precision hydronic zoning.",
    "image": "assets/images/boiler-img-4.jpg",
    "badge": "High Output",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "151,000 BTU",
    "price_from": 4400,
    "rebateAmount": 1000,
    "features": [
      "Heavy-duty Al-Si alloy heat exchanger resists thermal stresses",
      "4.0 GPM continuous domestic hot water flow rate",
      "Integrated modulating pump and digital diagnostics",
      "Eligible for Nicor Gas $1,000 rebate and 25C federal tax credits"
    ],
    "specs": {
      "Brand": "Bosch",
      "Capacity": "151,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "4.0 GPM Continuous",
      "Warranty": "Lifetime Heat Exchanger / 5-Year Parts",
      "Ideal Application": "3-4 bedroom homes with 2+ bathrooms"
    },
    "monthly_financing": 73,
    "rating": 4.9,
    "reviewsCount": 252,
    "gallery": [
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Bosch-151000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Bosch Greenstar ZBR Combi 151",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "151,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "burnham-mega-steam-75",
    "name": "Burnham Mega-Steam MST-288",
    "brand": "Burnham",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "High-efficiency 3-pass cast iron steam boiler engineered specifically to eliminate radiator banging and produce dry steam with industry-best fuel economy.",
    "image": "assets/images/boiler-img-2.jpg",
    "badge": "Quiet Radiators",
    "tag": "86% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "86% AFUE",
    "btu": "75,000 BTU",
    "price_from": 3900,
    "rebateAmount": 500,
    "features": [
      "Unique 3-pass cast iron heat exchanger design captures maximum heat",
      "Produces 99% dry steam for silent, balanced cast iron radiators",
      "Cast iron push nipples eliminate rubber gasket deterioration",
      "Electronic intermittent spark ignition eliminates standing pilot waste"
    ],
    "specs": {
      "Brand": "Burnham",
      "Capacity": "75,000 BTU/h Input",
      "AFUE Efficiency": "86% AFUE",
      "Steam Output": "240 Sq. Ft. Radiation Steam Capacity",
      "Warranty": "10-Year Heat Exchanger / 2-Year Parts",
      "Ideal Application": "Historic Joliet bungalows and 1-pipe steam radiators"
    },
    "monthly_financing": 65,
    "rating": 4.9,
    "reviewsCount": 162,
    "gallery": [
      "assets/images/boiler-img-2.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Burnham-Steam",
        "name": "Steam Boiler",
        "specs": "86% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "86% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Burnham Mega-Steam MST-288",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "86% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "75,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "burnham-mega-steam-105",
    "name": "Burnham Mega-Steam MST-396",
    "brand": "Burnham",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "Mid-size 3-pass cast iron steam powerhouse delivering 345 sq ft of steam radiation with 86% AFUE efficiency for historic 2-story residences.",
    "image": "assets/images/boiler-img-7.jpg",
    "badge": "Highest Steam AFUE",
    "tag": "86% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "86% AFUE",
    "btu": "105,000 BTU",
    "price_from": 4350,
    "rebateAmount": 600,
    "features": [
      "Industry-highest 86% AFUE rating for residential steam systems",
      "Superior thermal mass prevents short-cycling on cold winter nights",
      "Dual-fuel gas or oil burner compatibility options",
      "Standard electronic low-water cutoff safety interlock"
    ],
    "specs": {
      "Brand": "Burnham",
      "Capacity": "105,000 BTU/h Input",
      "AFUE Efficiency": "86% AFUE",
      "Steam Output": "345 Sq. Ft. Radiation",
      "Warranty": "10-Year Heat Exchanger / 2-Year Parts",
      "Ideal Application": "Multi-story historic Joliet & Plainfield homes"
    },
    "monthly_financing": 73,
    "rating": 4.9,
    "reviewsCount": 94,
    "gallery": [
      "assets/images/boiler-img-7.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Burnham-Steam",
        "name": "Steam Boiler",
        "specs": "86% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "86% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Burnham Mega-Steam MST-396",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "86% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "105,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "burnham-mega-steam-135",
    "name": "Burnham Mega-Steam MST-513",
    "brand": "Burnham",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "Heavy-duty 135,000 BTU steam boiler built for large heritage homes, duplexes, or historical properties with massive cast iron radiator circuits.",
    "image": "assets/images/boiler-img-3.jpg",
    "badge": "Heavy Residential",
    "tag": "86% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "86% AFUE",
    "btu": "135,000 BTU",
    "price_from": 4800,
    "rebateAmount": 700,
    "features": [
      "Massive 445 sq ft steam radiation output capacity",
      "True 3-pass heat exchanger design for low chimney flue losses",
      "Thick fiberglass insulated jacket reduces basement standby heat loss",
      "Factory-tapped skim port for clean boiler water commissioning"
    ],
    "specs": {
      "Brand": "Burnham",
      "Capacity": "135,000 BTU/h Input",
      "AFUE Efficiency": "86% AFUE",
      "Steam Output": "445 Sq. Ft. Radiation",
      "Warranty": "10-Year Heat Exchanger / 2-Year Parts",
      "Ideal Application": "Large estates, historic mansions & duplexes"
    },
    "monthly_financing": 80,
    "rating": 4.9,
    "reviewsCount": 171,
    "gallery": [
      "assets/images/boiler-img-3.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Burnham-Steam",
        "name": "Steam Boiler",
        "specs": "86% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "86% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Burnham Mega-Steam MST-513",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "86% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "135,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "crown-classic-steam-70",
    "name": "Crown Classic Steam BSI070",
    "brand": "Crown",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "Reliable, budget-friendly cast iron steam generator with powder-coated jacket and factory-assembled draft diverter.",
    "image": "assets/images/boiler-img-7.jpg",
    "badge": "Value Choice",
    "tag": "82% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "82% AFUE",
    "btu": "70,000 BTU",
    "price_from": 3100,
    "rebateAmount": 300,
    "features": [
      "Heavy-duty cast iron heat exchanger designed for durability",
      "Electronic ignition saves fuel compared to standing pilot lights",
      "Compact footprint fits narrow cellar stairways and basements",
      "ASME Section IV code certified cast iron block"
    ],
    "specs": {
      "Brand": "Crown",
      "Capacity": "70,000 BTU/h Input",
      "AFUE Efficiency": "82% AFUE",
      "Steam Output": "220 Sq. Ft. Radiation",
      "Warranty": "12-Year Cast Iron / 2-Year Parts",
      "Ideal Application": "Starter homes and classic steam radiator cottages"
    },
    "monthly_financing": 52,
    "rating": 4.9,
    "reviewsCount": 162,
    "gallery": [
      "assets/images/boiler-img-7.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Crown-Steam",
        "name": "Steam Boiler",
        "specs": "82% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "82% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Crown Classic Steam BSI070",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "82% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "70,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "crown-classic-steam-90",
    "name": "Crown Classic Steam BSI090",
    "brand": "Crown",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "Economical 90,000 BTU residential steam boiler providing consistent low-pressure steam heat for standard 3-bedroom radiator homes.",
    "image": "assets/images/boiler-img-2.jpg",
    "badge": "Budget Friendly",
    "tag": "82% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "82% AFUE",
    "btu": "90,000 BTU",
    "price_from": 3350,
    "rebateAmount": 350,
    "features": [
      "Proven 25+ year lifespan in Midwest heating seasons",
      "Built-in Hartford loop tapping points for reliable piping",
      "Factory-installed low water cutoff protection",
      "Tested for low-pressure steam delivery (0.5 to 2.0 PSI)"
    ],
    "specs": {
      "Brand": "Crown",
      "Capacity": "90,000 BTU/h Input",
      "AFUE Efficiency": "82% AFUE",
      "Steam Output": "285 Sq. Ft. Radiation",
      "Warranty": "12-Year Cast Iron / 2-Year Parts",
      "Ideal Application": "Classic Joliet brick bungalows"
    },
    "monthly_financing": 56,
    "rating": 4.9,
    "reviewsCount": 151,
    "gallery": [
      "assets/images/boiler-img-2.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Crown-Steam",
        "name": "Steam Boiler",
        "specs": "82% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "82% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Crown Classic Steam BSI090",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "82% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "90,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "honeywell-aquastat-l7224u",
    "name": "Honeywell L7224U Universal Electronic Aquastat",
    "brand": "Honeywell",
    "category": "controls",
    "categoryName": "Smart Controls",
    "description": "Universal digital electronic aquastat controller with high/low limit immersion temperature sensing and circulator priority relay.",
    "image": "assets/images/boiler-img-10.jpg",
    "badge": "Universal Fit",
    "tag": "Safety Limit",
    "tagClass": "badge-cyan",
    "efficiency": "High-Limit Safety",
    "btu": "Universal 120V",
    "price_from": 480,
    "rebateAmount": 100,
    "features": [
      "Replaces over 40 legacy mechanical aquastats in one universal unit",
      "Digital LED display with push-button temperature parameter setup",
      "Domestic hot water priority terminal isolates radiators during DHW calls",
      "Built-in thermal purge feature extracts residual heat into radiation loops"
    ],
    "specs": {
      "Brand": "Honeywell",
      "Voltage": "120 VAC, 60 Hz",
      "Operating Range": "130°F - 240°F Limit Range",
      "Certifications": "UL Listed, CSA Certified",
      "Warranty": "2-Year Manufacturer Warranty",
      "Ideal Application": "Cast iron water and oil/gas boiler automation"
    },
    "monthly_financing": 12,
    "rating": 4.9,
    "reviewsCount": 150,
    "gallery": [
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg"
    ],
    "warranty": "5-Yr Electronic Replacement Warranty",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Pozitive Heating & Cooling",
      "subtitle": "Certified Smart Automation & Energy Reset Integrator",
      "rating": 4.9,
      "reviews": 210,
      "status": "Local Delivery Included",
      "earliestInstall": "Available Today for Emergency Dispatch",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro District Dispatch",
      "scope": "Low-voltage automation wiring, outdoor sensor calibration & multi-zone smart panel commissioning.",
      "logo": "assets/images/logos/poz.jpg"
    },
    "bundleMatrix": {
      "control": {
        "code": "C",
        "model": "Honeywell-Micro",
        "name": "Master Control",
        "specs": "Microprocessor multi-zone hydronic staging & reset automation hub",
        "badge": "Smart Logic",
        "badgeClass": "pdp-chip-teal"
      },
      "sensor": {
        "code": "S",
        "model": "Outdoor-Probe-10K",
        "name": "Reset Sensor",
        "specs": "Outdoor ambient temperature sensor with weatherproof enclosure",
        "badge": "Weather Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "terminal": {
        "code": "T",
        "model": "Push-Subbase",
        "name": "Wiring Terminal",
        "specs": "Color-coded gold plated multi-zone relay subbase",
        "badge": "Pre-Wired",
        "badgeClass": "pdp-chip-teal"
      },
      "remoteSensor": {
        "code": "R",
        "model": "Indoor-Averaging-084",
        "name": "Indoor Sensor",
        "specs": "Flush-mount indoor temperature averaging thermistor probe",
        "badge": "Room Averaging",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 140,
        "financeAdd": 3
      }
    },
    "componentSpecs": {
      "control": {
        "title": "Control System",
        "model": "Honeywell L7224U Universal Electronic Aquastat",
        "bento": [
          {
            "label": "RESET EFFICIENCY",
            "value": "Up to 18%",
            "sub": "Eliminates Thermal Shock & Fuel Waste",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "ZONING SUPPORT",
            "value": "Universal 120V",
            "sub": "DHW Priority & Staged Boiler Relays",
            "color": "var(--cyan)",
            "icon": "icon-sliders"
          },
          {
            "label": "MICROPROCESSOR",
            "value": "Smart Logic",
            "sub": "Auto-Tune Supply Water Target",
            "color": "var(--text-white)",
            "icon": "icon-cpu"
          },
          {
            "label": "DISPLAY MONITOR",
            "value": "Digital Readout",
            "sub": "Real-Time Supply & Error Codes",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Input Power Supply",
            "val": "24V AC or 120V AC 60Hz"
          },
          {
            "label": "Relay Output Rating",
            "val": "5A @ 120V AC Inductive Contacts"
          },
          {
            "label": "Operating Ambient Range",
            "val": "-40°F to 140°F (-40°C to 60°C)"
          },
          {
            "label": "Enclosure Material",
            "val": "NEMA Type 1 Fire-Retardant ABS"
          },
          {
            "label": "Memory Retention",
            "val": "Non-Volatile EEPROM (No Battery Needed)"
          },
          {
            "label": "Safety Standards",
            "val": "UL 60730 & CSA Certified",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "honeywell-truezone-hz432",
    "name": "Honeywell HZ432 TrueZONE Hydronic Panel",
    "brand": "Honeywell",
    "category": "controls",
    "categoryName": "Smart Controls",
    "description": "Digital multi-zone control panel capable of managing up to 4 heating zones with variable speed pump staging and smartphone thermostat integration.",
    "image": "assets/images/boiler-img-9.jpg",
    "badge": "Zoning Hub",
    "tag": "Multi-Zone",
    "tagClass": "badge-cyan",
    "efficiency": "Zone Balance",
    "btu": "4-Zone Control",
    "price_from": 620,
    "rebateAmount": 120,
    "features": [
      "Intuitive push-in wiring terminals reduce field installation hours",
      "Backlit digital display guides system testing without a voltmeter",
      "Expandable up to 32 zones with simple add-on zone modules",
      "Works with Wi-Fi smart thermostats including Honeywell T9 and Ecobee"
    ],
    "specs": {
      "Brand": "Honeywell",
      "Zones": "4 Zones (Expandable to 32)",
      "Compatibility": "Conventional, heat pump, hydronic zone valves",
      "Certifications": "UL Recognized Component",
      "Warranty": "5-Year Professional Warranty",
      "Ideal Application": "Multi-zone baseboard and radiant heating systems"
    },
    "monthly_financing": 12,
    "rating": 4.9,
    "reviewsCount": 250,
    "gallery": [
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg"
    ],
    "warranty": "5-Yr Electronic Replacement Warranty",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Pozitive Heating & Cooling",
      "subtitle": "Certified Smart Automation & Energy Reset Integrator",
      "rating": 4.9,
      "reviews": 210,
      "status": "Local Delivery Included",
      "earliestInstall": "Available Today for Emergency Dispatch",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro District Dispatch",
      "scope": "Low-voltage automation wiring, outdoor sensor calibration & multi-zone smart panel commissioning.",
      "logo": "assets/images/logos/poz.jpg"
    },
    "bundleMatrix": {
      "control": {
        "code": "C",
        "model": "Honeywell-Micro",
        "name": "Master Control",
        "specs": "Microprocessor multi-zone hydronic staging & reset automation hub",
        "badge": "Smart Logic",
        "badgeClass": "pdp-chip-teal"
      },
      "sensor": {
        "code": "S",
        "model": "Outdoor-Probe-10K",
        "name": "Reset Sensor",
        "specs": "Outdoor ambient temperature sensor with weatherproof enclosure",
        "badge": "Weather Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "terminal": {
        "code": "T",
        "model": "Push-Subbase",
        "name": "Wiring Terminal",
        "specs": "Color-coded gold plated multi-zone relay subbase",
        "badge": "Pre-Wired",
        "badgeClass": "pdp-chip-teal"
      },
      "remoteSensor": {
        "code": "R",
        "model": "Indoor-Averaging-084",
        "name": "Indoor Sensor",
        "specs": "Flush-mount indoor temperature averaging thermistor probe",
        "badge": "Room Averaging",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 140,
        "financeAdd": 3
      }
    },
    "componentSpecs": {
      "control": {
        "title": "Control System",
        "model": "Honeywell HZ432 TrueZONE Hydronic Panel",
        "bento": [
          {
            "label": "RESET EFFICIENCY",
            "value": "Up to 18%",
            "sub": "Eliminates Thermal Shock & Fuel Waste",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "ZONING SUPPORT",
            "value": "4-Zone Control",
            "sub": "DHW Priority & Staged Boiler Relays",
            "color": "var(--cyan)",
            "icon": "icon-sliders"
          },
          {
            "label": "MICROPROCESSOR",
            "value": "Smart Logic",
            "sub": "Auto-Tune Supply Water Target",
            "color": "var(--text-white)",
            "icon": "icon-cpu"
          },
          {
            "label": "DISPLAY MONITOR",
            "value": "Digital Readout",
            "sub": "Real-Time Supply & Error Codes",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Input Power Supply",
            "val": "24V AC or 120V AC 60Hz"
          },
          {
            "label": "Relay Output Rating",
            "val": "5A @ 120V AC Inductive Contacts"
          },
          {
            "label": "Operating Ambient Range",
            "val": "-40°F to 140°F (-40°C to 60°C)"
          },
          {
            "label": "Enclosure Material",
            "val": "NEMA Type 1 Fire-Retardant ABS"
          },
          {
            "label": "Memory Retention",
            "val": "Non-Volatile EEPROM (No Battery Needed)"
          },
          {
            "label": "Safety Standards",
            "val": "UL 60730 & CSA Certified",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "lochinvar-knight-whn055",
    "name": "Lochinvar Knight WHN055",
    "brand": "Lochinvar",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "Compact 55,000 BTU modulating condensing boiler with 96% AFUE and SMART SYSTEM color control display, perfectly sized for well-insulated modern homes.",
    "image": "assets/images/boiler-img-1.jpg",
    "badge": "Compact Condensing",
    "tag": "96% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "96% AFUE",
    "btu": "55,000 BTU",
    "price_from": 3950,
    "rebateAmount": 1000,
    "features": [
      "Stainless steel fire-tube heat exchanger resists scale buildup",
      "10:1 modulating turndown ratio throttles down to just 5,500 BTU",
      "Built-in outdoor reset weather sensor matches water temperature to freeze levels",
      "Whisper-quiet ECM combustion blower"
    ],
    "specs": {
      "Brand": "Lochinvar",
      "Capacity": "55,000 BTU/h Input",
      "AFUE Efficiency": "96.0% AFUE",
      "Turndown Ratio": "10:1 Fully Modulating",
      "Warranty": "12-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Energy-efficient modern homes and condos"
    },
    "monthly_financing": 66,
    "rating": 4.9,
    "reviewsCount": 115,
    "gallery": [
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Lochinvar-WHN",
        "name": "Condensing Boiler",
        "specs": "96% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "96% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Lochinvar Knight WHN055",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "96% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "55,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "lochinvar-knight-whn110",
    "name": "Lochinvar Knight WHN110",
    "brand": "Lochinvar",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "Mid-size 110,000 BTU condensing powerhouse with top-tier 96% AFUE efficiency, multi-zone circulator staging, and USB service diagnostics.",
    "image": "assets/images/boiler-img-8.jpg",
    "badge": "Contractor Choice",
    "tag": "96% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "96% AFUE",
    "btu": "110,000 BTU",
    "price_from": 4350,
    "rebateAmount": 1200,
    "features": [
      "96% AFUE Energy Star Most Efficient qualification",
      "SMART SYSTEM display with full color setup wizard and fault history",
      "Controls up to 3 separate pump loops (Space heat, DHW, and System)",
      "Direct vent up to 100 feet with affordable PVC, CPVC, or polypropylene"
    ],
    "specs": {
      "Brand": "Lochinvar",
      "Capacity": "110,000 BTU/h Input",
      "AFUE Efficiency": "96.0% AFUE",
      "Turndown Ratio": "10:1 Fully Modulating",
      "Warranty": "12-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Baseboard, radiant floor, & indirect water tanks"
    },
    "monthly_financing": 73,
    "rating": 4.9,
    "reviewsCount": 204,
    "gallery": [
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Lochinvar-WHN",
        "name": "Condensing Boiler",
        "specs": "96% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "96% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Lochinvar Knight WHN110",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "96% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "110,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "lochinvar-knight-whn199",
    "name": "Lochinvar Knight WHN199",
    "brand": "Lochinvar",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "High-output 199,000 BTU residential/light commercial condensing unit providing massive hydronic capacity for large executive residences.",
    "image": "assets/images/boiler-img-6.jpg",
    "badge": "High Capacity",
    "tag": "96% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "96% AFUE",
    "btu": "199,000 BTU",
    "price_from": 5100,
    "rebateAmount": 1500,
    "features": [
      "True 10:1 turndown ratio matches wide seasonal heat-load variations",
      "Dual fuel natural gas or propane field convertible",
      "Seamless cascade linking with up to 8 Knight boilers",
      "Maximum qualifying Nicor Gas utility cash rebates"
    ],
    "specs": {
      "Brand": "Lochinvar",
      "Capacity": "199,000 BTU/h Input",
      "AFUE Efficiency": "96.0% AFUE",
      "Turndown Ratio": "10:1 Fully Modulating",
      "Warranty": "12-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Large homes, multi-zone manifolds & radiant loops"
    },
    "monthly_financing": 85,
    "rating": 4.9,
    "reviewsCount": 197,
    "gallery": [
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Lochinvar-WHN",
        "name": "Condensing Boiler",
        "specs": "96% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "96% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Lochinvar Knight WHN199",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "96% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "199,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "lochinvar-crest-commercial-1500",
    "name": "Lochinvar Crest Commercial FBN1500",
    "brand": "Lochinvar",
    "category": "commercial",
    "categoryName": "Commercial Boilers",
    "description": "Heavy commercial 1,500,000 BTU hydronic condensing powerhouse with 25:1 modulating turndown and cloud telemetry monitoring.",
    "image": "assets/images/boiler-cascade.jpg",
    "badge": "Heavy Commercial",
    "tag": "96% Thermal Eff.",
    "tagClass": "badge-pink",
    "efficiency": "96% Thermal Eff.",
    "btu": "1,500,000 BTU",
    "price_from": 22000,
    "rebateAmount": 5000,
    "features": [
      "Industry-leading 25:1 turndown down to 4% of full fire without short-cycling",
      "CON·X·US remote commercial equipment telemetry and error notification",
      "Duplex alloy stainless steel heat exchanger resists flue condensate corrosion",
      "ASME Section IV code stamped, CSD-1 compliant"
    ],
    "specs": {
      "Brand": "Lochinvar",
      "Capacity": "1,500,000 BTU/h Input",
      "Thermal Efficiency": "96.2% Thermal Efficiency",
      "Turndown Ratio": "25:1 Modulating",
      "Warranty": "10-Year Heat Exchanger / 2-Year Commercial Parts",
      "Ideal Application": "Commercial centers, hotels, industrial manufacturing plants"
    },
    "monthly_financing": 367,
    "rating": 4.9,
    "reviewsCount": 145,
    "gallery": [
      "assets/images/boiler-cascade.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Commercial Thermal Exchanger / 2-Yr Controls",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Trey Durden HVAC • Plumbing",
      "subtitle": "Commercial & Industrial Mechanical Contractor #044-819231",
      "rating": 4.9,
      "reviews": 420,
      "status": "Local Delivery Included",
      "earliestInstall": "Certified Site Survey Within 24h",
      "phone": "(815) 556-0660",
      "district": "Chicagoland Commercial & Industrial District",
      "scope": "ASME CSD-1 sign-off, digital flue gas combustion commissioning & heavy machinery rigging.",
      "logo": "assets/images/logos/td.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Lochinvar-COMM",
        "name": "Commercial Boiler",
        "specs": "96% Thermal Eff. | High-Capacity Condensing Array with Modbus Gateway",
        "badge": "96% Thermal Eff.",
        "badgeClass": "pdp-chip-teal"
      },
      "flue": {
        "code": "V",
        "model": "Poly-Common-Flue",
        "name": "Cascading Flue",
        "specs": "Engineered common polypropylene venting header with zero-clearance draft",
        "badge": "Cascadable",
        "badgeClass": "pdp-chip-cyan"
      },
      "pump": {
        "code": "P",
        "model": "Armstrong-4380",
        "name": "Header Pump",
        "specs": "In-line vertical commercial flanged circulating header pump",
        "badge": "Industrial",
        "badgeClass": "pdp-chip-teal"
      },
      "gateway": {
        "code": "G",
        "model": "SmartTouch-BMS",
        "name": "BACnet / Modbus",
        "specs": "BMS interface board for Trane, Johnson Controls & BACnet MS/TP",
        "badge": "BMS Ready",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1450,
        "financeAdd": 25
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Commercial Module",
        "model": "Lochinvar Crest Commercial FBN1500",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "96% Thermal Eff.",
            "sub": "AHRI Commercial Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "BTU OUTPUT",
            "value": "1,500,000 BTU",
            "sub": "Cascadable to 16,000,000 BTU Array",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "20:1 Turndown",
            "sub": "Precision Low-Fire Winter Cycling",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "NOX EMISSIONS",
            "value": "< 20 ppm",
            "sub": "SCAQMD Rule 1146.2 Ultra-Low NOx",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "68.0\" × 32.0\" × 48.0\""
          },
          {
            "label": "Operating Weight",
            "val": "840 to 1,450 lbs (Engineered Rigging)"
          },
          {
            "label": "ASME Vessel Stamp",
            "val": "Section IV \"H\" Stamped 160 PSI Rated",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Diameter",
            "val": "6\" to 10\" Polypropylene or AL29-4C"
          },
          {
            "label": "Flanged Water Connections",
            "val": "2-1/2\" to 4\" ANSI 150# Flanges"
          },
          {
            "label": "Gas Supply Requirement",
            "val": "1-1/4\" to 2\" NPT Low/High Pressure Gas"
          },
          {
            "label": "Touchscreen Interface",
            "val": "8-Inch Full Color Cascade Manager"
          },
          {
            "label": "AHRI Commercial ID",
            "val": "#30948122",
            "highlight": "var(--cyan)"
          }
        ]
      }
    }
  },
  {
    "id": "lochinvar-crest-commercial-2000",
    "name": "Lochinvar Crest Commercial FBN2000",
    "brand": "Lochinvar",
    "category": "commercial",
    "categoryName": "Commercial Boilers",
    "description": "2,000,000 BTU industrial condensing hydronic boiler featuring top water connections, dual-chamber fire tube, and BACnet/Modbus integration.",
    "image": "assets/images/boiler-img-6.jpg",
    "badge": "Industrial Power",
    "tag": "96% Thermal Eff.",
    "tagClass": "badge-pink",
    "efficiency": "96% Thermal Eff.",
    "btu": "2,000,000 BTU",
    "price_from": 28500,
    "rebateAmount": 6500,
    "features": [
      "Massive 2.0M BTU single-unit output with low emissions burners",
      "Touchscreen cascade manager links multiple units for N+1 redundancy",
      "High head capacity handles multi-story building loops easily",
      "Complies with City of Chicago & Will County commercial mechanical codes"
    ],
    "specs": {
      "Brand": "Lochinvar",
      "Capacity": "2,000,000 BTU/h Input",
      "Thermal Efficiency": "96.5% Thermal Efficiency",
      "Turndown Ratio": "25:1 Modulating",
      "Warranty": "10-Year Heat Exchanger / 2-Year Commercial Parts",
      "Ideal Application": "Hospitals, universities, multi-family apartment complexes"
    },
    "monthly_financing": 475,
    "rating": 4.9,
    "reviewsCount": 231,
    "gallery": [
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-cascade.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Commercial Thermal Exchanger / 2-Yr Controls",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Trey Durden HVAC • Plumbing",
      "subtitle": "Commercial & Industrial Mechanical Contractor #044-819231",
      "rating": 4.9,
      "reviews": 420,
      "status": "Local Delivery Included",
      "earliestInstall": "Certified Site Survey Within 24h",
      "phone": "(815) 556-0660",
      "district": "Chicagoland Commercial & Industrial District",
      "scope": "ASME CSD-1 sign-off, digital flue gas combustion commissioning & heavy machinery rigging.",
      "logo": "assets/images/logos/td.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Lochinvar-COMM",
        "name": "Commercial Boiler",
        "specs": "96% Thermal Eff. | High-Capacity Condensing Array with Modbus Gateway",
        "badge": "96% Thermal Eff.",
        "badgeClass": "pdp-chip-teal"
      },
      "flue": {
        "code": "V",
        "model": "Poly-Common-Flue",
        "name": "Cascading Flue",
        "specs": "Engineered common polypropylene venting header with zero-clearance draft",
        "badge": "Cascadable",
        "badgeClass": "pdp-chip-cyan"
      },
      "pump": {
        "code": "P",
        "model": "Armstrong-4380",
        "name": "Header Pump",
        "specs": "In-line vertical commercial flanged circulating header pump",
        "badge": "Industrial",
        "badgeClass": "pdp-chip-teal"
      },
      "gateway": {
        "code": "G",
        "model": "SmartTouch-BMS",
        "name": "BACnet / Modbus",
        "specs": "BMS interface board for Trane, Johnson Controls & BACnet MS/TP",
        "badge": "BMS Ready",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1450,
        "financeAdd": 25
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Commercial Module",
        "model": "Lochinvar Crest Commercial FBN2000",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "96% Thermal Eff.",
            "sub": "AHRI Commercial Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "BTU OUTPUT",
            "value": "2,000,000 BTU",
            "sub": "Cascadable to 16,000,000 BTU Array",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "20:1 Turndown",
            "sub": "Precision Low-Fire Winter Cycling",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "NOX EMISSIONS",
            "value": "< 20 ppm",
            "sub": "SCAQMD Rule 1146.2 Ultra-Low NOx",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "68.0\" × 32.0\" × 48.0\""
          },
          {
            "label": "Operating Weight",
            "val": "840 to 1,450 lbs (Engineered Rigging)"
          },
          {
            "label": "ASME Vessel Stamp",
            "val": "Section IV \"H\" Stamped 160 PSI Rated",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Diameter",
            "val": "6\" to 10\" Polypropylene or AL29-4C"
          },
          {
            "label": "Flanged Water Connections",
            "val": "2-1/2\" to 4\" ANSI 150# Flanges"
          },
          {
            "label": "Gas Supply Requirement",
            "val": "1-1/4\" to 2\" NPT Low/High Pressure Gas"
          },
          {
            "label": "Touchscreen Interface",
            "val": "8-Inch Full Color Cascade Manager"
          },
          {
            "label": "AHRI Commercial ID",
            "val": "#30948122",
            "highlight": "var(--cyan)"
          }
        ]
      }
    }
  },
  {
    "id": "navien-ncb-h-190",
    "name": "Navien NCB-190H Combi",
    "brand": "Navien",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "Compact wall-hung condensing combi boiler delivering 80,000 BTU space heating and 120,000 BTU on-demand domestic hot water from a single unit.",
    "image": "assets/images/boiler-img-5.jpg",
    "badge": "Compact Combi",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "120,000 BTU",
    "price_from": 3750,
    "rebateAmount": 850,
    "features": [
      "Dual stainless steel heat exchangers eliminate scaling and corrosion",
      "3.4 GPM continuous domestic hot water flow rate",
      "15:1 modulating turndown ratio prevents gas waste during mild weather",
      "Simple setup with intuitive digital interface and NaviLink Wi-Fi capability"
    ],
    "specs": {
      "Brand": "Navien",
      "Capacity": "120,000 BTU/h Max Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "3.4 GPM Continuous",
      "Warranty": "10-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Condos, townhomes, and 1-2 bath homes"
    },
    "monthly_financing": 63,
    "rating": 4.9,
    "reviewsCount": 260,
    "gallery": [
      "assets/images/boiler-img-5.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Navien-120000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Navien NCB-190H Combi",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "120,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "navien-ncb-h-240",
    "name": "Navien NCB-240H Combi",
    "brand": "Navien",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "Mid-size combi unit delivering whole-home hydronic heating plus up to 4.8 GPM endless domestic hot water with 15:1 turndown.",
    "image": "assets/images/boiler-img-4.jpg",
    "badge": "Most Popular",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "160,000 BTU",
    "price_from": 4150,
    "rebateAmount": 1000,
    "features": [
      "Dual stainless steel heat exchangers resist aggressive water mineral content",
      "Continuous domestic hot water at 4.8 GPM @ 70°F temperature rise",
      "15:1 turndown ratio cuts winter heating bills by up to 30%",
      "Saves up to 80% of floor space compared to conventional boiler & tank"
    ],
    "specs": {
      "Brand": "Navien",
      "Capacity": "160,000 BTU/h Max Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "4.8 GPM Continuous",
      "Warranty": "10-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Standard 3-4 bedroom homes with 2 bathrooms"
    },
    "monthly_financing": 69,
    "rating": 4.9,
    "reviewsCount": 223,
    "gallery": [
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Navien-160000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Navien NCB-240H Combi",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "160,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "navien-ncb-h-250",
    "name": "Navien NCB-250H Combi",
    "brand": "Navien",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "Maximum output condensing combi delivering 199,000 BTU hot water input and 5.4 GPM continuous flow for luxury homes with high demand.",
    "image": "assets/images/boiler-img-1.jpg",
    "badge": "Top Capacity",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "199,000 BTU",
    "price_from": 4500,
    "rebateAmount": 1100,
    "features": [
      "Supplies endless simultaneous hot water for up to 3 showers at once",
      "15:1 turndown ratio operates down to 13,300 BTU without short-cycling",
      "Built-in expansion tank and high-head circulator pump",
      "Approved for 2-inch PVC venting up to 65 feet"
    ],
    "specs": {
      "Brand": "Navien",
      "Capacity": "199,000 BTU/h Max Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "5.4 GPM Continuous",
      "Warranty": "10-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Luxury residences with multi-bath simultaneous demand"
    },
    "monthly_financing": 75,
    "rating": 4.9,
    "reviewsCount": 145,
    "gallery": [
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Navien-199000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Navien NCB-250H Combi",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "199,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "tekmar-smart-automation-560",
    "name": "Tekmar 560 Wi-Fi Cascade Control",
    "brand": "Tekmar",
    "category": "controls",
    "categoryName": "Smart Controls",
    "description": "Microprocessor-based multi-boiler automation hub with intelligent outdoor reset calculation and smartphone app heating management.",
    "image": "assets/images/boiler-img-9.jpg",
    "badge": "Smart Automation",
    "tag": "Cascade Hub",
    "tagClass": "badge-cyan",
    "efficiency": "Up to 15% Savings",
    "btu": "Multi-Boiler Hub",
    "price_from": 850,
    "rebateAmount": 150,
    "features": [
      "Continuously adjusts boiler water supply temperature based on outdoor freeze",
      "Stages and rotates up to 4 boilers to equalize runtime and prevent wear",
      "Push alert notifications for sudden low water temperature or freeze risks",
      "Compatible with all hydronic boiler brands (0-10V, 4-20mA, or dry contact)"
    ],
    "specs": {
      "Brand": "Tekmar",
      "Connectivity": "Wi-Fi 802.11 b/g/n & Watts Home Mobile App",
      "Sensors": "Outdoor Ambient + System Supply + Return Temp Sensors",
      "Warranty": "3-Year Limited Warranty",
      "Ideal Application": "Residential multi-zone and commercial cascade hydronics"
    },
    "monthly_financing": 14,
    "rating": 4.9,
    "reviewsCount": 173,
    "gallery": [
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg"
    ],
    "warranty": "5-Yr Electronic Replacement Warranty",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Pozitive Heating & Cooling",
      "subtitle": "Certified Smart Automation & Energy Reset Integrator",
      "rating": 4.9,
      "reviews": 210,
      "status": "Local Delivery Included",
      "earliestInstall": "Available Today for Emergency Dispatch",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro District Dispatch",
      "scope": "Low-voltage automation wiring, outdoor sensor calibration & multi-zone smart panel commissioning.",
      "logo": "assets/images/logos/poz.jpg"
    },
    "bundleMatrix": {
      "control": {
        "code": "C",
        "model": "Tekmar-Micro",
        "name": "Master Control",
        "specs": "Microprocessor multi-zone hydronic staging & reset automation hub",
        "badge": "Smart Logic",
        "badgeClass": "pdp-chip-teal"
      },
      "sensor": {
        "code": "S",
        "model": "Outdoor-Probe-10K",
        "name": "Reset Sensor",
        "specs": "Outdoor ambient temperature sensor with weatherproof enclosure",
        "badge": "Weather Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "terminal": {
        "code": "T",
        "model": "Push-Subbase",
        "name": "Wiring Terminal",
        "specs": "Color-coded gold plated multi-zone relay subbase",
        "badge": "Pre-Wired",
        "badgeClass": "pdp-chip-teal"
      },
      "remoteSensor": {
        "code": "R",
        "model": "Indoor-Averaging-084",
        "name": "Indoor Sensor",
        "specs": "Flush-mount indoor temperature averaging thermistor probe",
        "badge": "Room Averaging",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 140,
        "financeAdd": 3
      }
    },
    "componentSpecs": {
      "control": {
        "title": "Control System",
        "model": "Tekmar 560 Wi-Fi Cascade Control",
        "bento": [
          {
            "label": "RESET EFFICIENCY",
            "value": "Up to 18%",
            "sub": "Eliminates Thermal Shock & Fuel Waste",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "ZONING SUPPORT",
            "value": "Multi-Boiler Hub",
            "sub": "DHW Priority & Staged Boiler Relays",
            "color": "var(--cyan)",
            "icon": "icon-sliders"
          },
          {
            "label": "MICROPROCESSOR",
            "value": "Smart Logic",
            "sub": "Auto-Tune Supply Water Target",
            "color": "var(--text-white)",
            "icon": "icon-cpu"
          },
          {
            "label": "DISPLAY MONITOR",
            "value": "Digital Readout",
            "sub": "Real-Time Supply & Error Codes",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Input Power Supply",
            "val": "24V AC or 120V AC 60Hz"
          },
          {
            "label": "Relay Output Rating",
            "val": "5A @ 120V AC Inductive Contacts"
          },
          {
            "label": "Operating Ambient Range",
            "val": "-40°F to 140°F (-40°C to 60°C)"
          },
          {
            "label": "Enclosure Material",
            "val": "NEMA Type 1 Fire-Retardant ABS"
          },
          {
            "label": "Memory Retention",
            "val": "Non-Volatile EEPROM (No Battery Needed)"
          },
          {
            "label": "Safety Standards",
            "val": "UL 60730 & CSA Certified",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "tekmar-reset-control-256",
    "name": "Tekmar 256 Outdoor Reset Controller",
    "brand": "Tekmar",
    "category": "controls",
    "categoryName": "Smart Controls",
    "description": "Single-stage boiler outdoor reset controller that automatically adjusts boiler water temperature to eliminate room overheating.",
    "image": "assets/images/boiler-img-10.jpg",
    "badge": "Energy Saver",
    "tag": "Outdoor Reset",
    "tagClass": "badge-cyan",
    "efficiency": "12% Fuel Savings",
    "btu": "Single Boiler",
    "price_from": 420,
    "rebateAmount": 75,
    "features": [
      "Modulates water temperature between 80°F and 200°F based on weather",
      "Warm weather shut-down feature prevents boiler firing on warm spring days",
      "Compact DIN rail or surface mounting enclosure",
      "Extends boiler life by reducing burner start/stop frequency"
    ],
    "specs": {
      "Brand": "Tekmar",
      "Inputs": "10k Outdoor & 10k Universal Water Temp Sensors",
      "Relays": "1 Boiler Contact (10A @ 120VAC)",
      "Warranty": "3-Year Limited Warranty",
      "Ideal Application": "Cast iron radiator and baseboard retrofits"
    },
    "monthly_financing": 12,
    "rating": 4.9,
    "reviewsCount": 127,
    "gallery": [
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg"
    ],
    "warranty": "5-Yr Electronic Replacement Warranty",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Pozitive Heating & Cooling",
      "subtitle": "Certified Smart Automation & Energy Reset Integrator",
      "rating": 4.9,
      "reviews": 210,
      "status": "Local Delivery Included",
      "earliestInstall": "Available Today for Emergency Dispatch",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro District Dispatch",
      "scope": "Low-voltage automation wiring, outdoor sensor calibration & multi-zone smart panel commissioning.",
      "logo": "assets/images/logos/poz.jpg"
    },
    "bundleMatrix": {
      "control": {
        "code": "C",
        "model": "Tekmar-Micro",
        "name": "Master Control",
        "specs": "Microprocessor multi-zone hydronic staging & reset automation hub",
        "badge": "Smart Logic",
        "badgeClass": "pdp-chip-teal"
      },
      "sensor": {
        "code": "S",
        "model": "Outdoor-Probe-10K",
        "name": "Reset Sensor",
        "specs": "Outdoor ambient temperature sensor with weatherproof enclosure",
        "badge": "Weather Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "terminal": {
        "code": "T",
        "model": "Push-Subbase",
        "name": "Wiring Terminal",
        "specs": "Color-coded gold plated multi-zone relay subbase",
        "badge": "Pre-Wired",
        "badgeClass": "pdp-chip-teal"
      },
      "remoteSensor": {
        "code": "R",
        "model": "Indoor-Averaging-084",
        "name": "Indoor Sensor",
        "specs": "Flush-mount indoor temperature averaging thermistor probe",
        "badge": "Room Averaging",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 140,
        "financeAdd": 3
      }
    },
    "componentSpecs": {
      "control": {
        "title": "Control System",
        "model": "Tekmar 256 Outdoor Reset Controller",
        "bento": [
          {
            "label": "RESET EFFICIENCY",
            "value": "Up to 18%",
            "sub": "Eliminates Thermal Shock & Fuel Waste",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "ZONING SUPPORT",
            "value": "Single Boiler",
            "sub": "DHW Priority & Staged Boiler Relays",
            "color": "var(--cyan)",
            "icon": "icon-sliders"
          },
          {
            "label": "MICROPROCESSOR",
            "value": "Smart Logic",
            "sub": "Auto-Tune Supply Water Target",
            "color": "var(--text-white)",
            "icon": "icon-cpu"
          },
          {
            "label": "DISPLAY MONITOR",
            "value": "Digital Readout",
            "sub": "Real-Time Supply & Error Codes",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Input Power Supply",
            "val": "24V AC or 120V AC 60Hz"
          },
          {
            "label": "Relay Output Rating",
            "val": "5A @ 120V AC Inductive Contacts"
          },
          {
            "label": "Operating Ambient Range",
            "val": "-40°F to 140°F (-40°C to 60°C)"
          },
          {
            "label": "Enclosure Material",
            "val": "NEMA Type 1 Fire-Retardant ABS"
          },
          {
            "label": "Memory Retention",
            "val": "Non-Volatile EEPROM (No Battery Needed)"
          },
          {
            "label": "Safety Standards",
            "val": "UL 60730 & CSA Certified",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "uponor-radiant-manifold-4",
    "name": "Uponor TruFLOW Classic Manifold 4-Loop",
    "brand": "Uponor",
    "category": "radiators-radiant",
    "categoryName": "Radiant In-Floor",
    "description": "Engineered brass distribution manifold with 4 balance loops, integrated sight-glass flow meters, and isolation ball valves for radiant zones.",
    "image": "assets/images/boiler-img-8.jpg",
    "badge": "Precision Flow",
    "tag": "4-Loop Manifold",
    "tagClass": "badge-pink",
    "efficiency": "Precision Balance",
    "btu": "50,000 BTU",
    "price_from": 1450,
    "rebateAmount": 200,
    "features": [
      "Sight-glass visual flow meters allow exact GPM loop balancing",
      "Corrosion-resistant forged brass construction with isolation valves",
      "Engineered for Uponor oxygen-barrier PEX-A piping loops",
      "Delivers whisper-silent, even thermal radiant floor heat"
    ],
    "specs": {
      "Brand": "Uponor",
      "Loops": "4 Independent Radiant Loops",
      "Flow Range": "0.15 to 0.80 GPM per loop",
      "Warranty": "25-Year System / 10-Year Manifold",
      "Ideal Application": "Basements, luxury bathrooms & kitchen renovations"
    },
    "monthly_financing": 24,
    "rating": 4.9,
    "reviewsCount": 216,
    "gallery": [
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "25-Yr Uponor PEX / 10-Yr Brass Manifold",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "HG Home Comfort Atelier",
      "subtitle": "Luxury Hydronic & Radiant In-Floor Specialist",
      "rating": 4.9,
      "reviews": 154,
      "status": "Local Delivery Included",
      "earliestInstall": "Next Business Day",
      "phone": "(815) 556-0550",
      "district": "Greater Chicago Architectural Districts",
      "scope": "Digital manifold balancing, microbubble air separation & smart ECM zone circulation setup.",
      "logo": "assets/images/logos/hg.jpg"
    },
    "bundleMatrix": {
      "manifold": {
        "code": "M",
        "model": "Uponor-Classic",
        "name": "Radiant Manifold",
        "specs": "Stainless steel flow-balancing manifold with visual indicators",
        "badge": "Balancing",
        "badgeClass": "pdp-chip-teal"
      },
      "mixing": {
        "code": "X",
        "model": "Watts-Hydro-Mix",
        "name": "Mixing Station",
        "specs": "3-way thermostatic mixing station with integrated temperature sensors",
        "badge": "Temp Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "accessories": {
        "code": "A",
        "model": "Purge-Fill-Trim",
        "name": "Purge & Isolation",
        "specs": "Complete brass ball valve shutoffs, dual gauges & auto-bleeders",
        "badge": "Complete Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "actuators": {
        "code": "T",
        "model": "Thermal-Actuator-24V",
        "name": "Zone Actuators",
        "specs": "Set of 24V thermoelectric zone actuators with end switches",
        "badge": "Smart Zoning",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 420,
        "financeAdd": 7
      }
    },
    "componentSpecs": {
      "manifold": {
        "title": "Radiant Manifold",
        "model": "Uponor TruFLOW Classic Manifold 4-Loop",
        "bento": [
          {
            "label": "FLOW REGULATION",
            "value": "0 - 2.0 GPM",
            "sub": "Individual Circuit Visual Flowmeter",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "STAINLESS STEEL",
            "value": "AISI 304L",
            "sub": "Deep-Drawn Anti-Corrosion Alloy",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RATING",
            "value": "145 PSI Test",
            "sub": "Rated for Heavy In-Slab Hydronics",
            "color": "var(--text-white)",
            "icon": "icon-tools"
          },
          {
            "label": "CIRCUIT CAPACITY",
            "value": "50,000 BTU",
            "sub": "Engineered Radiant Floor Hydronics",
            "color": "var(--cyan-bright)",
            "icon": "icon-home"
          }
        ],
        "techSpecs": [
          {
            "label": "Header Trunk Pipe Size",
            "val": "1-1/4\" NPT Female Inlets"
          },
          {
            "label": "Loop Branch Connections",
            "val": "R20 QS Eurocone PEX Adapters"
          },
          {
            "label": "Loop Compatibility",
            "val": "3/8\", 1/2\", 5/8\" PEX-a Barrier Tubing"
          },
          {
            "label": "Max Fluid Temperature",
            "val": "200°F (93°C) Continuous Hydronic"
          },
          {
            "label": "Mounting Brackets",
            "val": "Sound-Isolating Zinc-Plated Galvanized"
          },
          {
            "label": "Purge & Fill Valves",
            "val": "Dual 3/4\" GHT Drain Outlets"
          }
        ]
      }
    }
  },
  {
    "id": "uponor-radiant-manifold-8",
    "name": "Uponor TruFLOW Classic Manifold 8-Loop",
    "brand": "Uponor",
    "category": "radiators-radiant",
    "categoryName": "Radiant In-Floor",
    "description": "Complete 8-loop hydronic distribution station capable of balancing whole-house in-floor radiant heating circuits up to 3,500 sq ft.",
    "image": "assets/images/boiler-img-8.jpg",
    "badge": "Whole-House",
    "tag": "8-Loop Manifold",
    "tagClass": "badge-pink",
    "efficiency": "Whole-Home Transfer",
    "btu": "85,000 BTU",
    "price_from": 2450,
    "rebateAmount": 500,
    "features": [
      "Even heat from floor to ceiling with zero blowing drafts or dust allergens",
      "High-grade brass body with automatic air vent and fill/drain valves",
      "Integrates seamlessly with high-efficiency condensing combi boilers",
      "Supports multiple thermostat zone actuators"
    ],
    "specs": {
      "Brand": "Uponor",
      "Loops": "8 Independent Radiant Loops",
      "Operating Temp": "85°F - 130°F Low Temperature Hydronics",
      "Warranty": "25-Year Tubing / 10-Year Manifold",
      "Ideal Application": "Whole-home new construction & major additions"
    },
    "monthly_financing": 41,
    "rating": 4.9,
    "reviewsCount": 190,
    "gallery": [
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "25-Yr Uponor PEX / 10-Yr Brass Manifold",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "HG Home Comfort Atelier",
      "subtitle": "Luxury Hydronic & Radiant In-Floor Specialist",
      "rating": 4.9,
      "reviews": 154,
      "status": "Local Delivery Included",
      "earliestInstall": "Next Business Day",
      "phone": "(815) 556-0550",
      "district": "Greater Chicago Architectural Districts",
      "scope": "Digital manifold balancing, microbubble air separation & smart ECM zone circulation setup.",
      "logo": "assets/images/logos/hg.jpg"
    },
    "bundleMatrix": {
      "manifold": {
        "code": "M",
        "model": "Uponor-Classic",
        "name": "Radiant Manifold",
        "specs": "Stainless steel flow-balancing manifold with visual indicators",
        "badge": "Balancing",
        "badgeClass": "pdp-chip-teal"
      },
      "mixing": {
        "code": "X",
        "model": "Watts-Hydro-Mix",
        "name": "Mixing Station",
        "specs": "3-way thermostatic mixing station with integrated temperature sensors",
        "badge": "Temp Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "accessories": {
        "code": "A",
        "model": "Purge-Fill-Trim",
        "name": "Purge & Isolation",
        "specs": "Complete brass ball valve shutoffs, dual gauges & auto-bleeders",
        "badge": "Complete Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "actuators": {
        "code": "T",
        "model": "Thermal-Actuator-24V",
        "name": "Zone Actuators",
        "specs": "Set of 24V thermoelectric zone actuators with end switches",
        "badge": "Smart Zoning",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 420,
        "financeAdd": 7
      }
    },
    "componentSpecs": {
      "manifold": {
        "title": "Radiant Manifold",
        "model": "Uponor TruFLOW Classic Manifold 8-Loop",
        "bento": [
          {
            "label": "FLOW REGULATION",
            "value": "0 - 2.0 GPM",
            "sub": "Individual Circuit Visual Flowmeter",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "STAINLESS STEEL",
            "value": "AISI 304L",
            "sub": "Deep-Drawn Anti-Corrosion Alloy",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RATING",
            "value": "145 PSI Test",
            "sub": "Rated for Heavy In-Slab Hydronics",
            "color": "var(--text-white)",
            "icon": "icon-tools"
          },
          {
            "label": "CIRCUIT CAPACITY",
            "value": "85,000 BTU",
            "sub": "Engineered Radiant Floor Hydronics",
            "color": "var(--cyan-bright)",
            "icon": "icon-home"
          }
        ],
        "techSpecs": [
          {
            "label": "Header Trunk Pipe Size",
            "val": "1-1/4\" NPT Female Inlets"
          },
          {
            "label": "Loop Branch Connections",
            "val": "R20 QS Eurocone PEX Adapters"
          },
          {
            "label": "Loop Compatibility",
            "val": "3/8\", 1/2\", 5/8\" PEX-a Barrier Tubing"
          },
          {
            "label": "Max Fluid Temperature",
            "val": "200°F (93°C) Continuous Hydronic"
          },
          {
            "label": "Mounting Brackets",
            "val": "Sound-Isolating Zinc-Plated Galvanized"
          },
          {
            "label": "Purge & Fill Valves",
            "val": "Dual 3/4\" GHT Drain Outlets"
          }
        ]
      }
    }
  },
  {
    "id": "utica-trifecta-80",
    "name": "Utica Trifecta TRF-080",
    "brand": "Utica",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "High-efficiency 80,000 BTU gas condensing water boiler featuring artificial intelligence self-tuning combustion for optimal seasonal efficiency.",
    "image": "assets/images/boiler-img-6.jpg",
    "badge": "AI Combustion",
    "tag": "95% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "95% AFUE",
    "btu": "80,000 BTU",
    "price_from": 3550,
    "rebateAmount": 850,
    "features": [
      "Artificial intelligence technology requires no manual gas orifice adjustments",
      "Vertical down-fired 316L stainless steel heat exchanger design",
      "Direct pipe drop-in dimensions for rapid installation",
      "Eligible for maximum Nicor Gas high-efficiency rebates"
    ],
    "specs": {
      "Brand": "Utica",
      "Capacity": "80,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "Turndown Ratio": "7:1 Modulating",
      "Warranty": "15-Year Heat Exchanger / 3-Year Parts",
      "Ideal Application": "Baseboard and hydronic heating replacements"
    },
    "monthly_financing": 59,
    "rating": 4.9,
    "reviewsCount": 139,
    "gallery": [
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Utica-WHN",
        "name": "Condensing Boiler",
        "specs": "95% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Utica Trifecta TRF-080",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "80,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "utica-trifecta-100",
    "name": "Utica Trifecta TRF-100",
    "brand": "Utica",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "100,000 BTU condensing hydronic boiler with auto-sensing fuel adaptation and high-volume stainless steel water passages.",
    "image": "assets/images/boiler-img-10.jpg",
    "badge": "Smart Combustion",
    "tag": "95% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "95% AFUE",
    "btu": "100,000 BTU",
    "price_from": 3750,
    "rebateAmount": 900,
    "features": [
      "Continuous combustion parameter calibration in extreme sub-zero weather",
      "Low hydraulic head loss reduces electrical power draw on circulator pumps",
      "Compact wall-hung chassis frees up floor space",
      "Quiet operation suitable for living-level installations"
    ],
    "specs": {
      "Brand": "Utica",
      "Capacity": "100,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "Turndown Ratio": "7:1 Modulating",
      "Warranty": "15-Year Heat Exchanger / 3-Year Parts",
      "Ideal Application": "3-4 bedroom homes with baseboards or fan coils"
    },
    "monthly_financing": 63,
    "rating": 4.9,
    "reviewsCount": 214,
    "gallery": [
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Utica-WHN",
        "name": "Condensing Boiler",
        "specs": "95% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Utica Trifecta TRF-100",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "100,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "viessmann-vitodens-100-85",
    "name": "Viessmann Vitodens 100-W 85",
    "brand": "Viessmann",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "German-engineered condensing combi boiler featuring Inox-Radial self-cleaning stainless steel heat exchanger and built-in Wi-Fi.",
    "image": "assets/images/boiler-img-5.jpg",
    "badge": "German Precision",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "85,000 BTU",
    "price_from": 4250,
    "rebateAmount": 950,
    "features": [
      "Inox-Radial 316L stainless steel self-cleaning heat exchanger",
      "MatriX cylinder burner ensures ultra-low emissions and longevity",
      "Built-in Wi-Fi interface for ViCare mobile app diagnostics",
      "2.6 GPM continuous domestic hot water output"
    ],
    "specs": {
      "Brand": "Viessmann",
      "Capacity": "85,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "2.6 GPM Continuous",
      "Warranty": "Limited Lifetime Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Condos, townhomes, and compact energy-efficient homes"
    },
    "monthly_financing": 71,
    "rating": 4.9,
    "reviewsCount": 244,
    "gallery": [
      "assets/images/boiler-img-5.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Viessmann-85000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Viessmann Vitodens 100-W 85",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "85,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "viessmann-vitodens-100-125",
    "name": "Viessmann Vitodens 100-W 125",
    "brand": "Viessmann",
    "category": "tankless-boilers",
    "categoryName": "Tankless & Combi",
    "description": "High-output 125,000 BTU condensing combi delivering whole-home heating plus 3.8 GPM continuous hot water from a single compact wall chassis.",
    "image": "assets/images/boiler-img-1.jpg",
    "badge": "Top Efficiency",
    "tag": "95% AFUE",
    "tagClass": "badge-pink",
    "efficiency": "95% AFUE",
    "btu": "125,000 BTU",
    "price_from": 4650,
    "rebateAmount": 1000,
    "features": [
      "Commercial-grade Inox-Radial stainless steel technology",
      "Touchscreen user interface with full diagnostic readouts",
      "Continuous domestic hot water at 3.8 GPM @ 75°F rise",
      "Certified Energy Star Most Efficient with Nicor utility rebates"
    ],
    "specs": {
      "Brand": "Viessmann",
      "Capacity": "125,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "DHW Flow Rate": "3.8 GPM Continuous",
      "Warranty": "Limited Lifetime Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Luxury residences, multi-zone radiant heating"
    },
    "monthly_financing": 78,
    "rating": 4.9,
    "reviewsCount": 199,
    "gallery": [
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "15-Yr Heat Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Waters Hot Again",
      "subtitle": "Certified Tankless Water Heater & Combi Specialist",
      "rating": 4.9,
      "reviews": 188,
      "status": "Local Delivery Included",
      "earliestInstall": "Within 24 Hours",
      "phone": "(815) 556-0660",
      "district": "Chicago Metro & Suburbs",
      "scope": "Turnkey tankless conversion, concentric venting, gas line upgrade & 1-year emergency warranty.",
      "logo": "assets/images/logos/waters_hot.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Viessmann-125000",
        "name": "Combi Boiler",
        "specs": "95% AFUE | On-Demand Domestic Hot Water & Space Heating",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "manifold": {
        "code": "M",
        "model": "Hydro-Loop-PSS",
        "name": "P/S Manifold",
        "specs": "1-1/4\" Hydraulic Separator with Pre-Plumbed Primary/Secondary Header",
        "badge": "Factory Trim",
        "badgeClass": "pdp-chip-cyan"
      },
      "neutralizer": {
        "code": "N",
        "model": "Saniflo-CN2",
        "name": "Condensate Trap",
        "specs": "Inline Magnesium Oxide Pellet Condensate Acid Neutralizer",
        "badge": "Code Ready",
        "badgeClass": "pdp-chip-teal"
      },
      "recircKit": {
        "code": "R",
        "model": "Smart-Recirc-Loop",
        "name": "DHW Recirc Loop",
        "specs": "Built-in return line crossover valve & demand timer",
        "badge": "Instant Hot",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 650,
        "financeAdd": 11
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Combi Boiler",
        "model": "Viessmann Vitodens 100-W 125",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING INPUT",
            "value": "125,000 BTU",
            "sub": "High-Recovery Modulating Burner",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "DHW CAPACITY",
            "value": "3.8 - 5.4 GPM",
            "sub": "Continuous @ 70°F Temperature Rise",
            "color": "var(--text-white)",
            "icon": "icon-droplet"
          },
          {
            "label": "SOUND THRESHOLD",
            "value": "38.2 dBA",
            "sub": "Ultra-Quiet Sound Deadening Shell",
            "color": "var(--cyan-bright)",
            "icon": "icon-volume"
          }
        ],
        "techSpecs": [
          {
            "label": "Dimensions (H × W × D)",
            "val": "28.0\" × 17.5\" × 14.5\""
          },
          {
            "label": "Operating Weight",
            "val": "88 lbs (Wall-Hung Compact)"
          },
          {
            "label": "Electrical Supply",
            "val": "120V / 15A Breaker (1-Ph)"
          },
          {
            "label": "Turndown Ratio",
            "val": "10:1 Seamless Output Modulation",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Heat Exchanger Metallurgy",
            "val": "Patented Al-Si / 316L Stainless Steel",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Compatibility",
            "val": "2\" or 3\" PVC, CPVC, or Polypropylene"
          },
          {
            "label": "Max Domestic Pressure",
            "val": "150 PSI Relief Rating"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#19827410",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "hydronics": {
        "title": "Hydronic Piping",
        "model": "Primary/Secondary Trim",
        "bento": [
          {
            "label": "LOOP COUPLING",
            "value": "Primary/Sec",
            "sub": "Isolates Boiler from Field Head Loss",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "PUMP TECHNOLOGY",
            "value": "Modulating ECM",
            "sub": "Low-Wattage High-Flow Circulator",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "VENT RUN LIMIT",
            "value": "150 Equivalent Ft",
            "sub": "Long-Distance Sidewall or Roof Flue",
            "color": "var(--text-white)",
            "icon": "icon-arrow-right"
          },
          {
            "label": "AIR SEPARATION",
            "value": "Microbubble Trap",
            "sub": "Purges Dissolved Oxygen & Air",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Space Heating Pipe Size",
            "val": "1\" NPT Threaded Brass Unions"
          },
          {
            "label": "DHW In/Out Pipe Size",
            "val": "3/4\" NPT Threaded Connections"
          },
          {
            "label": "Gas Supply Connection",
            "val": "3/4\" NPT Female Gas Cock"
          },
          {
            "label": "Built-in Expansion Tank",
            "val": "2.0 Gallon Internal Diaphragm"
          },
          {
            "label": "Condensate Drain Size",
            "val": "1/2\" Clear Braided Tubing"
          },
          {
            "label": "Outdoor Reset Curve",
            "val": "Included 10k Ohm Remote Probe",
            "highlight": "var(--green)"
          }
        ]
      }
    }
  },
  {
    "id": "watts-mixing-station-std",
    "name": "Watts HydroControl Mixing Station 3-Way",
    "brand": "Watts",
    "category": "radiators-radiant",
    "categoryName": "Radiant In-Floor",
    "description": "Thermostatic 3-way mixing station designed to blend boiler water down to comfortable in-floor radiant temperatures (85°F - 130°F).",
    "image": "assets/images/boiler-pumps.jpg",
    "badge": "Floor Protection",
    "tag": "Mixing Valve",
    "tagClass": "badge-cyan",
    "efficiency": "Thermal Balance",
    "btu": "80,000 BTU",
    "price_from": 1250,
    "rebateAmount": 150,
    "features": [
      "Protects hardwood, bamboo, and luxury vinyl tile from thermal damage",
      "Dial-in temperature setting with built-in thermometer gauges",
      "Forged brass valve body with union connection fittings",
      "Prevents boiler condensation shock on return piping"
    ],
    "specs": {
      "Brand": "Watts",
      "Capacity": "80,000 BTU/h Throughput",
      "Temperature Range": "70°F - 145°F Adjustable",
      "Warranty": "5-Year Manufacturer Warranty",
      "Ideal Application": "Adding radiant in-floor zones to existing high-temp boilers"
    },
    "monthly_financing": 21,
    "rating": 4.9,
    "reviewsCount": 191,
    "gallery": [
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "25-Yr Uponor PEX / 10-Yr Brass Manifold",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "HG Home Comfort Atelier",
      "subtitle": "Luxury Hydronic & Radiant In-Floor Specialist",
      "rating": 4.9,
      "reviews": 154,
      "status": "Local Delivery Included",
      "earliestInstall": "Next Business Day",
      "phone": "(815) 556-0550",
      "district": "Greater Chicago Architectural Districts",
      "scope": "Digital manifold balancing, microbubble air separation & smart ECM zone circulation setup.",
      "logo": "assets/images/logos/hg.jpg"
    },
    "bundleMatrix": {
      "manifold": {
        "code": "M",
        "model": "Watts-Classic",
        "name": "Radiant Manifold",
        "specs": "Stainless steel flow-balancing manifold with visual indicators",
        "badge": "Balancing",
        "badgeClass": "pdp-chip-teal"
      },
      "mixing": {
        "code": "X",
        "model": "Watts-Hydro-Mix",
        "name": "Mixing Station",
        "specs": "3-way thermostatic mixing station with integrated temperature sensors",
        "badge": "Temp Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "accessories": {
        "code": "A",
        "model": "Purge-Fill-Trim",
        "name": "Purge & Isolation",
        "specs": "Complete brass ball valve shutoffs, dual gauges & auto-bleeders",
        "badge": "Complete Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "actuators": {
        "code": "T",
        "model": "Thermal-Actuator-24V",
        "name": "Zone Actuators",
        "specs": "Set of 24V thermoelectric zone actuators with end switches",
        "badge": "Smart Zoning",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 420,
        "financeAdd": 7
      }
    },
    "componentSpecs": {
      "manifold": {
        "title": "Radiant Manifold",
        "model": "Watts HydroControl Mixing Station 3-Way",
        "bento": [
          {
            "label": "FLOW REGULATION",
            "value": "0 - 2.0 GPM",
            "sub": "Individual Circuit Visual Flowmeter",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "STAINLESS STEEL",
            "value": "AISI 304L",
            "sub": "Deep-Drawn Anti-Corrosion Alloy",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RATING",
            "value": "145 PSI Test",
            "sub": "Rated for Heavy In-Slab Hydronics",
            "color": "var(--text-white)",
            "icon": "icon-tools"
          },
          {
            "label": "CIRCUIT CAPACITY",
            "value": "80,000 BTU",
            "sub": "Engineered Radiant Floor Hydronics",
            "color": "var(--cyan-bright)",
            "icon": "icon-home"
          }
        ],
        "techSpecs": [
          {
            "label": "Header Trunk Pipe Size",
            "val": "1-1/4\" NPT Female Inlets"
          },
          {
            "label": "Loop Branch Connections",
            "val": "R20 QS Eurocone PEX Adapters"
          },
          {
            "label": "Loop Compatibility",
            "val": "3/8\", 1/2\", 5/8\" PEX-a Barrier Tubing"
          },
          {
            "label": "Max Fluid Temperature",
            "val": "200°F (93°C) Continuous Hydronic"
          },
          {
            "label": "Mounting Brackets",
            "val": "Sound-Isolating Zinc-Plated Galvanized"
          },
          {
            "label": "Purge & Fill Valves",
            "val": "Dual 3/4\" GHT Drain Outlets"
          }
        ]
      }
    }
  },
  {
    "id": "watts-mixing-station-ecm",
    "name": "Watts HydroControl Station with ECM Pump",
    "brand": "Watts",
    "category": "radiators-radiant",
    "categoryName": "Radiant In-Floor",
    "description": "Pre-plumbed radiant injection mixing station with Grundfos ECM variable speed circulator pump and check valves for quick installation.",
    "image": "assets/images/boiler-pumps.jpg",
    "badge": "Thermal Protection",
    "tag": "Smart Station",
    "tagClass": "badge-cyan",
    "efficiency": "99% Balance",
    "btu": "120,000 BTU",
    "price_from": 1850,
    "rebateAmount": 250,
    "features": [
      "High-efficiency ECM circulator reduces electrical power use by 80%",
      "Factory assembled and pressure tested on sturdy mounting bracket",
      "Automatic return water temperature monitoring",
      "Heavy-duty forged brass construction with isolation ball valves"
    ],
    "specs": {
      "Brand": "Watts",
      "Capacity": "120,000 BTU/h Max Throughput",
      "Circulator": "Variable Speed ECM Smart Pump",
      "Warranty": "5-Year Manufacturer Warranty",
      "Ideal Application": "Multi-temperature boiler systems (baseboard + in-floor)"
    },
    "monthly_financing": 31,
    "rating": 4.9,
    "reviewsCount": 206,
    "gallery": [
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-8.jpg",
      "assets/images/boiler-img-9.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "25-Yr Uponor PEX / 10-Yr Brass Manifold",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "HG Home Comfort Atelier",
      "subtitle": "Luxury Hydronic & Radiant In-Floor Specialist",
      "rating": 4.9,
      "reviews": 154,
      "status": "Local Delivery Included",
      "earliestInstall": "Next Business Day",
      "phone": "(815) 556-0550",
      "district": "Greater Chicago Architectural Districts",
      "scope": "Digital manifold balancing, microbubble air separation & smart ECM zone circulation setup.",
      "logo": "assets/images/logos/hg.jpg"
    },
    "bundleMatrix": {
      "manifold": {
        "code": "M",
        "model": "Watts-Classic",
        "name": "Radiant Manifold",
        "specs": "Stainless steel flow-balancing manifold with visual indicators",
        "badge": "Balancing",
        "badgeClass": "pdp-chip-teal"
      },
      "mixing": {
        "code": "X",
        "model": "Watts-Hydro-Mix",
        "name": "Mixing Station",
        "specs": "3-way thermostatic mixing station with integrated temperature sensors",
        "badge": "Temp Reset",
        "badgeClass": "pdp-chip-cyan"
      },
      "accessories": {
        "code": "A",
        "model": "Purge-Fill-Trim",
        "name": "Purge & Isolation",
        "specs": "Complete brass ball valve shutoffs, dual gauges & auto-bleeders",
        "badge": "Complete Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "actuators": {
        "code": "T",
        "model": "Thermal-Actuator-24V",
        "name": "Zone Actuators",
        "specs": "Set of 24V thermoelectric zone actuators with end switches",
        "badge": "Smart Zoning",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 420,
        "financeAdd": 7
      }
    },
    "componentSpecs": {
      "manifold": {
        "title": "Radiant Manifold",
        "model": "Watts HydroControl Station with ECM Pump",
        "bento": [
          {
            "label": "FLOW REGULATION",
            "value": "0 - 2.0 GPM",
            "sub": "Individual Circuit Visual Flowmeter",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "STAINLESS STEEL",
            "value": "AISI 304L",
            "sub": "Deep-Drawn Anti-Corrosion Alloy",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RATING",
            "value": "145 PSI Test",
            "sub": "Rated for Heavy In-Slab Hydronics",
            "color": "var(--text-white)",
            "icon": "icon-tools"
          },
          {
            "label": "CIRCUIT CAPACITY",
            "value": "120,000 BTU",
            "sub": "Engineered Radiant Floor Hydronics",
            "color": "var(--cyan-bright)",
            "icon": "icon-home"
          }
        ],
        "techSpecs": [
          {
            "label": "Header Trunk Pipe Size",
            "val": "1-1/4\" NPT Female Inlets"
          },
          {
            "label": "Loop Branch Connections",
            "val": "R20 QS Eurocone PEX Adapters"
          },
          {
            "label": "Loop Compatibility",
            "val": "3/8\", 1/2\", 5/8\" PEX-a Barrier Tubing"
          },
          {
            "label": "Max Fluid Temperature",
            "val": "200°F (93°C) Continuous Hydronic"
          },
          {
            "label": "Mounting Brackets",
            "val": "Sound-Isolating Zinc-Plated Galvanized"
          },
          {
            "label": "Purge & Fill Valves",
            "val": "Dual 3/4\" GHT Drain Outlets"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-peg-steam-50",
    "name": "Weil-McLain PEG-30 Steam Boiler",
    "brand": "Weil-McLain",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "Compact 50,000 BTU cast iron residential steam boiler designed for 1-2 story radiator homes with durable push nipples and electronic ignition.",
    "image": "assets/images/boiler-img-3.jpg",
    "badge": "Proven Cast Iron",
    "tag": "84% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "84% AFUE",
    "btu": "50,000 BTU",
    "price_from": 3500,
    "rebateAmount": 400,
    "features": [
      "Heavy-duty cast iron sectional block with 20-year factory warranty",
      "Factory-installed electronic low-water cutoff safety interlock",
      "Engineered for classic Joliet architectural homes",
      "Quiet electronic intermittent pilot ignition"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "50,000 BTU/h Input",
      "AFUE Efficiency": "84% AFUE",
      "Steam Output": "158 Sq. Ft. Radiation",
      "Operating Pressure": "0.5 - 2 PSI Low Pressure",
      "Warranty": "20-Year Cast Iron / 5-Year Parts",
      "Ideal Application": "Small historic homes and brick bungalows"
    },
    "monthly_financing": 58,
    "rating": 4.9,
    "reviewsCount": 245,
    "gallery": [
      "assets/images/boiler-img-3.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-Steam",
        "name": "Steam Boiler",
        "specs": "84% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "84% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Weil-McLain PEG-30 Steam Boiler",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "84% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "50,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-peg-steam-75",
    "name": "Weil-McLain PEG-45 Steam Boiler",
    "brand": "Weil-McLain",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "The gold standard for residential steam heating. Features durable cast iron sectional design, atmospheric venting, and quiet electronic ignition matched for classic radiators.",
    "image": "assets/images/boiler-img-3.jpg",
    "badge": "Industry Standard",
    "tag": "84% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "84% AFUE",
    "btu": "75,000 BTU",
    "price_from": 3850,
    "rebateAmount": 450,
    "features": [
      "Heavy-duty cast iron sections with 20-year factory warranty",
      "Factory-installed low-water cutoff & automatic water feeder ready",
      "Engineered specifically for historic Joliet radiator homes",
      "Atmospheric chimney draft hood with electronic intermittent pilot"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "75,000 BTU/h Input",
      "AFUE Efficiency": "84% AFUE",
      "Steam Output": "238 Sq. Ft. Radiation Steam Capacity",
      "Operating Pressure": "0.5 - 2 PSI Low Pressure",
      "Warranty": "20-Year Cast Iron / 5-Year Parts",
      "Ideal Application": "Residential cast iron steam radiators"
    },
    "monthly_financing": 64,
    "rating": 4.9,
    "reviewsCount": 127,
    "gallery": [
      "assets/images/boiler-img-3.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-Steam",
        "name": "Steam Boiler",
        "specs": "84% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "84% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Weil-McLain PEG-45 Steam Boiler",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "84% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "75,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-peg-steam-105",
    "name": "Weil-McLain PEG-60 Steam Boiler",
    "brand": "Weil-McLain",
    "category": "steam-boilers",
    "categoryName": "Steam Boilers",
    "description": "High-capacity 105,000 BTU cast iron steam boiler delivering 333 sq ft of steam radiation for large 2-story classic homes.",
    "image": "assets/images/boiler-img-7.jpg",
    "badge": "High Radiation",
    "tag": "84% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "84% AFUE",
    "btu": "105,000 BTU",
    "price_from": 4200,
    "rebateAmount": 550,
    "features": [
      "333 sq ft steam radiation capacity handles extensive radiator circuits",
      "Cast iron push nipples seal block without rubber gasket degradation",
      "Includes pressure gauge, glass water level gauge, and safety relief valve",
      "Built for 30+ year lifespan in rigorous Illinois winter conditions"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "105,000 BTU/h Input",
      "AFUE Efficiency": "84% AFUE",
      "Steam Output": "333 Sq. Ft. Radiation",
      "Warranty": "20-Year Cast Iron / 5-Year Parts",
      "Ideal Application": "Large historic residences with multiple radiator zones"
    },
    "monthly_financing": 70,
    "rating": 4.9,
    "reviewsCount": 174,
    "gallery": [
      "assets/images/boiler-img-7.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Cast Iron Sections / 2-Yr Parts",
    "energyStar": false,
    "a2lReady": false,
    "vendor": {
      "name": "Jerry's Heating & Cooling",
      "subtitle": "Will County Steam & Cast Iron Restoration Expert",
      "rating": 4.8,
      "reviews": 176,
      "status": "Local Delivery Included",
      "earliestInstall": "Monday, Oct 23",
      "phone": "(815) 791-7447",
      "district": "Will County & South Suburban District",
      "scope": "Heavy iron boiler header piping, Hartford loop inspection & complete steam air vent balancing.",
      "logo": "assets/images/logos/jerry.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-Steam",
        "name": "Steam Boiler",
        "specs": "84% AFUE | 3-Pass Heavy Cast Iron Sectional Vessel",
        "badge": "84% AFUE",
        "badgeClass": "pdp-chip-cyan"
      },
      "trim": {
        "code": "T",
        "model": "Hartford-Drop-Header",
        "name": "Steam Header Trim",
        "specs": "Equalizer assembly with brass siphon pigtail & 0-30 PSI gauge",
        "badge": "ASME Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "lwco": {
        "code": "L",
        "model": "Hydrolevel-CG450",
        "name": "Electronic LWCO",
        "specs": "Dual-probe low water cutoff with 15-sec burner intermittent delay",
        "badge": "Safety Interlock",
        "badgeClass": "pdp-chip-cyan"
      },
      "feeder": {
        "code": "F",
        "model": "Hydrolevel-VXT24",
        "name": "Auto Water Feeder",
        "specs": "Digital auto-feeder with water meter counter & lockout safety",
        "badge": "Auto Feed",
        "badgeClass": "pdp-chip-teal",
        "priceAdd": 550,
        "financeAdd": 9
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Steam Vessel",
        "model": "Weil-McLain PEG-60 Steam Boiler",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "84% AFUE",
            "sub": "Top Tier Cast Iron Efficiency",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "STEAM QUALITY",
            "value": "99.2% Dry",
            "sub": "Eliminates Radiator Banging & Noise",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "STEAM CAPACITY",
            "value": "105,000 BTU",
            "sub": "Balanced Cast Iron Radiator Output",
            "color": "var(--text-white)",
            "icon": "icon-bolt"
          },
          {
            "label": "VESSEL METALLURGY",
            "value": "Cast Iron",
            "sub": "3-Pass Heat Exchanger with Push Nipples",
            "color": "var(--cyan-bright)",
            "icon": "icon-package"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Square Feet EDR",
            "val": "215 to 480 Sq Ft Steam EDR",
            "highlight": "var(--cyan)"
          },
          {
            "label": "Normal Water Operating Line",
            "val": "11.5 Gallons Internal Water Volume"
          },
          {
            "label": "Operating Steam Pressure",
            "val": "0.5 to 2.0 PSI Vapor Cycle"
          },
          {
            "label": "Section Material",
            "val": "Heavy Gray Cast Iron Class 30"
          },
          {
            "label": "Chimney Flue Collar",
            "val": "5\" to 7\" Galvanized Metal Draft Diverter"
          },
          {
            "label": "Ignition Control",
            "val": "Electronic Intermittent Spark Pilot"
          },
          {
            "label": "Safety Relief Valve",
            "val": "15 PSI ASME Section IV Steam Valve",
            "highlight": "var(--green)"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#08273612",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "trim": {
        "title": "Steam Trim Package",
        "model": "Hartford Loop Assembly",
        "bento": [
          {
            "label": "SAFETY SHUTOFF",
            "value": "Dual LWCO",
            "sub": "Hydrolevel Electronic Probe",
            "color": "var(--green)",
            "icon": "icon-shield"
          },
          {
            "label": "PRESSURE RELIEF",
            "value": "15 PSI ASME",
            "sub": "Factory Calibrated Safety Valve",
            "color": "var(--cyan)",
            "icon": "icon-tools"
          },
          {
            "label": "GAUGE GLASS",
            "value": "Borosilicate",
            "sub": "Heavy-Wall Tubular Level Gauge",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "SKIM VALVE",
            "value": "1-1/4\" Full Port",
            "sub": "Rapid Chemical Cleanout Port",
            "color": "var(--cyan-bright)",
            "icon": "icon-droplet"
          }
        ],
        "techSpecs": [
          {
            "label": "Steam Outlets",
            "val": "Dual 2\" NPT Steam Supply Risers"
          },
          {
            "label": "Hartford Loop Connection",
            "val": "Close Nipple to Equalizer Below Water Line"
          },
          {
            "label": "Return Line Size",
            "val": "1-1/2\" NPT Wet/Dry Return"
          },
          {
            "label": "Pressuretrol Range",
            "val": "0.5 to 9.0 PSI with 1.0 PSI Differential"
          },
          {
            "label": "Water Level Sight Glass",
            "val": "10\" High-Pressure Glass with Ball Valves"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-aquabalance-80",
    "name": "Weil-McLain AquaBalance 80",
    "brand": "Weil-McLain",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "Compact condensing hydronic boiler featuring high-grade titanium-infused stainless steel heat exchanger with low hydraulic head loss.",
    "image": "assets/images/boiler-img-10.jpg",
    "badge": "Compact Hydronic",
    "tag": "95% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "95% AFUE",
    "btu": "80,000 BTU",
    "price_from": 3950,
    "rebateAmount": 1000,
    "features": [
      "Titanium-infused stainless steel heat exchanger ensures maximum durability",
      "Ultra-compact footprint fits tight basement walls and mechanical closets",
      "Pre-wired for outdoor temperature reset sensor",
      "Built-in low water cutoff safety interlock"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "80,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "Turndown Ratio": "10:1 Modulating",
      "Warranty": "15-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "Residential baseboards and hydronic air handlers"
    },
    "monthly_financing": 66,
    "rating": 4.9,
    "reviewsCount": 117,
    "gallery": [
      "assets/images/boiler-img-10.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-1.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-WHN",
        "name": "Condensing Boiler",
        "specs": "95% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Weil-McLain AquaBalance 80",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "80,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-aquabalance-120",
    "name": "Weil-McLain AquaBalance 120",
    "brand": "Weil-McLain",
    "category": "hot-water-boilers",
    "categoryName": "Hot Water Boilers",
    "description": "Mid-size 120,000 BTU condensing hydronic boiler with 95% AFUE and 10:1 modulating turndown for whole-home comfort.",
    "image": "assets/images/boiler-img-1.jpg",
    "badge": "High Turndown",
    "tag": "95% AFUE",
    "tagClass": "badge-cyan",
    "efficiency": "95% AFUE",
    "btu": "120,000 BTU",
    "price_from": 4300,
    "rebateAmount": 1100,
    "features": [
      "Titanium stainless steel heat exchanger with extra-large water ways",
      "Quiet ECM variable speed circulator pump included internally",
      "Vents up to 100 feet in 2-inch or 3-inch PVC/CPVC pipe",
      "Eligible for Nicor Gas $1,000 rebate and 25C federal energy tax credits"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "120,000 BTU/h Input",
      "AFUE Efficiency": "95.0% AFUE",
      "Turndown Ratio": "10:1 Modulating",
      "Warranty": "15-Year Heat Exchanger / 5-Year Parts",
      "Ideal Application": "3-4 bedroom homes with baseboards and radiant loops"
    },
    "monthly_financing": 72,
    "rating": 4.9,
    "reviewsCount": 81,
    "gallery": [
      "assets/images/boiler-img-1.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-4.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "12-Yr Stainless Exchanger / 5-Yr Parts",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Affordable Heating & Cooling",
      "subtitle": "Residential Hydronic Service, Repair & Installation",
      "rating": 4.8,
      "reviews": 245,
      "status": "Local Delivery Included",
      "earliestInstall": "Friday, Oct 20",
      "phone": "(815) 556-0660",
      "district": "Cook County & Greater Chicago Metro",
      "scope": "Includes municipal plumbing & gas permits, combustion analysis & 1-year craftsmanship guarantee.",
      "logo": "assets/images/logos/affordable.png"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-WHN",
        "name": "Condensing Boiler",
        "specs": "95% AFUE | Fire-Tube Stainless Heat Engine with Smart Controller",
        "badge": "95% AFUE",
        "badgeClass": "pdp-chip-teal"
      },
      "circulator": {
        "code": "P",
        "model": "Taco-0018e-ECM",
        "name": "ECM Pump",
        "specs": "Variable-speed flanged circulator with Bluetooth app commissioning",
        "badge": "Smart Pump",
        "badgeClass": "pdp-chip-cyan"
      },
      "expansion": {
        "code": "E",
        "model": "Amtrol-Extrol-30",
        "name": "Expansion Trim",
        "specs": "Pre-pressurized diaphragm expansion tank & brass air separator",
        "badge": "Code Trim",
        "badgeClass": "pdp-chip-teal"
      },
      "indirectTank": {
        "code": "I",
        "model": "Squire-40G-Indirect",
        "name": "Indirect DHW Tank",
        "specs": "40-Gallon 316L stainless steel indirect domestic hot water storage",
        "badge": "Endless DHW",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1650,
        "financeAdd": 28
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Condensing Boiler",
        "model": "Weil-McLain AquaBalance 120",
        "bento": [
          {
            "label": "EFFICIENCY RATING",
            "value": "95% AFUE",
            "sub": "ENERGY STAR® Most Efficient",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "HEATING CAPACITY",
            "value": "120,000 BTU",
            "sub": "Continuous Modulating Output",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "10:1 Turndown",
            "sub": "Smart Fire-Tube Gas Combustion",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "HEAT EXCHANGER",
            "value": "316L Stainless",
            "sub": "Corrosion-Proof Hydro-Coil Design",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "31.0\" × 18.0\" × 16.0\""
          },
          {
            "label": "Dry Weight",
            "val": "112 lbs (Wall-Hung or Floor Stand)"
          },
          {
            "label": "Electrical Requirement",
            "val": "120V / 15A Circuit"
          },
          {
            "label": "Max Working Water Pressure",
            "val": "30 or 50 PSI ASME Rating",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Allowance",
            "val": "Up to 100 Equivalent Feet 2\"/3\" Poly"
          },
          {
            "label": "Outdoor Reset Ratio",
            "val": "Fully Programmable Heating Curves"
          },
          {
            "label": "Gas Supply Pressure",
            "val": "4.0\" to 14.0\" W.C. Natural Gas"
          },
          {
            "label": "AHRI Certification ID",
            "val": "#10938210",
            "highlight": "var(--cyan)"
          }
        ]
      },
      "circulator": {
        "title": "ECM Circulator Pump",
        "model": "Taco 0018e High-Efficiency",
        "bento": [
          {
            "label": "MOTOR TECHNOLOGY",
            "value": "ECM Permanent",
            "sub": "Up to 85% Electricity Savings",
            "color": "var(--green)",
            "icon": "icon-fan"
          },
          {
            "label": "FLOW RANGE",
            "value": "Up to 18 GPM",
            "sub": "Proportional & Constant Pressure",
            "color": "var(--cyan)",
            "icon": "icon-droplet"
          },
          {
            "label": "HEAD PRESSURE",
            "value": "18 Ft Max",
            "sub": "Dynamic Zoned Hydronic Balancing",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "MOBILE CONTROL",
            "value": "BLE Telemetry",
            "sub": "Real-time Flow & Wattage Readout",
            "color": "var(--cyan-bright)",
            "icon": "icon-tools"
          }
        ],
        "techSpecs": [
          {
            "label": "Power Consumption",
            "val": "4W Minimum / 44W Full Load"
          },
          {
            "label": "Flange Connection Size",
            "val": "1\" or 1-1/4\" Cast Bronze Rotating Flanges"
          },
          {
            "label": "Operating Fluid Temp",
            "val": "36°F to 230°F (2°C to 110°C)"
          },
          {
            "label": "Casing Construction",
            "val": "Cast Iron Electro-Coated Corrosion Shield"
          },
          {
            "label": "Warranty",
            "val": "3-Year Manufacturer Warranty"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-svf-commercial-500",
    "name": "Weil-McLain SVF Commercial 500",
    "brand": "Weil-McLain",
    "category": "commercial",
    "categoryName": "Commercial Boilers",
    "description": "Industry-leading 97.1% thermal efficiency commercial boiler with rugged vertical fire-tube stainless steel heat exchanger.",
    "image": "assets/images/boiler-cascade.jpg",
    "badge": "97% Thermal",
    "tag": "97% Thermal",
    "tagClass": "badge-pink",
    "efficiency": "97.1% Thermal Eff.",
    "btu": "500,000 BTU",
    "price_from": 11500,
    "rebateAmount": 2500,
    "features": [
      "97.1% AHRI certified thermal efficiency cuts commercial building bills",
      "Vertical stainless steel fire-tube heat exchanger resists thermal stress",
      "Unity color touchscreen control with Modbus & BACnet BMS connectivity",
      "ASME Section IV code stamped, CSD-1 compliant"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "500,000 BTU/h Input",
      "Thermal Efficiency": "97.1% Thermal Efficiency",
      "Safety Code": "ASME Section IV H-Stamp, CSD-1 Compliant",
      "Warranty": "10-Year Heat Exchanger / 2-Year Commercial Parts",
      "Ideal Application": "Churches, municipal facilities, multi-family apartments"
    },
    "monthly_financing": 192,
    "rating": 4.9,
    "reviewsCount": 195,
    "gallery": [
      "assets/images/boiler-cascade.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Commercial Thermal Exchanger / 2-Yr Controls",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Trey Durden HVAC • Plumbing",
      "subtitle": "Commercial & Industrial Mechanical Contractor #044-819231",
      "rating": 4.9,
      "reviews": 420,
      "status": "Local Delivery Included",
      "earliestInstall": "Certified Site Survey Within 24h",
      "phone": "(815) 556-0660",
      "district": "Chicagoland Commercial & Industrial District",
      "scope": "ASME CSD-1 sign-off, digital flue gas combustion commissioning & heavy machinery rigging.",
      "logo": "assets/images/logos/td.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-COMM",
        "name": "Commercial Boiler",
        "specs": "97.1% Thermal Eff. | High-Capacity Condensing Array with Modbus Gateway",
        "badge": "97.1% Thermal Eff.",
        "badgeClass": "pdp-chip-teal"
      },
      "flue": {
        "code": "V",
        "model": "Poly-Common-Flue",
        "name": "Cascading Flue",
        "specs": "Engineered common polypropylene venting header with zero-clearance draft",
        "badge": "Cascadable",
        "badgeClass": "pdp-chip-cyan"
      },
      "pump": {
        "code": "P",
        "model": "Armstrong-4380",
        "name": "Header Pump",
        "specs": "In-line vertical commercial flanged circulating header pump",
        "badge": "Industrial",
        "badgeClass": "pdp-chip-teal"
      },
      "gateway": {
        "code": "G",
        "model": "SmartTouch-BMS",
        "name": "BACnet / Modbus",
        "specs": "BMS interface board for Trane, Johnson Controls & BACnet MS/TP",
        "badge": "BMS Ready",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1450,
        "financeAdd": 25
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Commercial Module",
        "model": "Weil-McLain SVF Commercial 500",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "97.1% Thermal Eff.",
            "sub": "AHRI Commercial Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "BTU OUTPUT",
            "value": "500,000 BTU",
            "sub": "Cascadable to 16,000,000 BTU Array",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "20:1 Turndown",
            "sub": "Precision Low-Fire Winter Cycling",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "NOX EMISSIONS",
            "value": "< 20 ppm",
            "sub": "SCAQMD Rule 1146.2 Ultra-Low NOx",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "68.0\" × 32.0\" × 48.0\""
          },
          {
            "label": "Operating Weight",
            "val": "840 to 1,450 lbs (Engineered Rigging)"
          },
          {
            "label": "ASME Vessel Stamp",
            "val": "Section IV \"H\" Stamped 160 PSI Rated",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Diameter",
            "val": "6\" to 10\" Polypropylene or AL29-4C"
          },
          {
            "label": "Flanged Water Connections",
            "val": "2-1/2\" to 4\" ANSI 150# Flanges"
          },
          {
            "label": "Gas Supply Requirement",
            "val": "1-1/4\" to 2\" NPT Low/High Pressure Gas"
          },
          {
            "label": "Touchscreen Interface",
            "val": "8-Inch Full Color Cascade Manager"
          },
          {
            "label": "AHRI Commercial ID",
            "val": "#30948122",
            "highlight": "var(--cyan)"
          }
        ]
      }
    }
  },
  {
    "id": "weil-mclain-svf-commercial-750",
    "name": "Weil-McLain SVF Commercial 750",
    "brand": "Weil-McLain",
    "category": "commercial",
    "categoryName": "Commercial Boilers",
    "description": "Heavy-duty 750,000 BTU commercial condensing hydronic boiler featuring Unit-to-Unit master/slave cascading up to 8 boilers.",
    "image": "assets/images/boiler-cascade.jpg",
    "badge": "ASME Stamped",
    "tag": "97% Thermal",
    "tagClass": "badge-pink",
    "efficiency": "97.1% Thermal Eff.",
    "btu": "750,000 BTU",
    "price_from": 14500,
    "rebateAmount": 3500,
    "features": [
      "Massive commercial capacity with full 10:1 modulating turndown",
      "Cascade linking up to 8 units (6,000,000 BTU combined capacity)",
      "Low hydraulic resistance allows full-flow primary pumping systems",
      "City of Chicago and Illinois state boiler inspector certified"
    ],
    "specs": {
      "Brand": "Weil-McLain",
      "Capacity": "750,000 BTU/h Input",
      "Thermal Efficiency": "97.1% Thermal Efficiency",
      "Safety Code": "ASME Section IV Code Stamped, CSD-1 Compliant",
      "Warranty": "10-Year Heat Exchanger / 2-Year Commercial Parts",
      "Ideal Application": "Schools, commercial complexes, hospital wings"
    },
    "monthly_financing": 242,
    "rating": 4.9,
    "reviewsCount": 166,
    "gallery": [
      "assets/images/boiler-cascade.jpg",
      "assets/images/boiler-pumps.jpg",
      "assets/images/boiler-img-6.jpg",
      "assets/images/boiler-img-10.jpg"
    ],
    "warranty": "10-Yr Commercial Thermal Exchanger / 2-Yr Controls",
    "energyStar": true,
    "a2lReady": false,
    "vendor": {
      "name": "Trey Durden HVAC • Plumbing",
      "subtitle": "Commercial & Industrial Mechanical Contractor #044-819231",
      "rating": 4.9,
      "reviews": 420,
      "status": "Local Delivery Included",
      "earliestInstall": "Certified Site Survey Within 24h",
      "phone": "(815) 556-0660",
      "district": "Chicagoland Commercial & Industrial District",
      "scope": "ASME CSD-1 sign-off, digital flue gas combustion commissioning & heavy machinery rigging.",
      "logo": "assets/images/logos/td.jpg"
    },
    "bundleMatrix": {
      "boiler": {
        "code": "B",
        "model": "Weil-McLain-COMM",
        "name": "Commercial Boiler",
        "specs": "97.1% Thermal Eff. | High-Capacity Condensing Array with Modbus Gateway",
        "badge": "97.1% Thermal Eff.",
        "badgeClass": "pdp-chip-teal"
      },
      "flue": {
        "code": "V",
        "model": "Poly-Common-Flue",
        "name": "Cascading Flue",
        "specs": "Engineered common polypropylene venting header with zero-clearance draft",
        "badge": "Cascadable",
        "badgeClass": "pdp-chip-cyan"
      },
      "pump": {
        "code": "P",
        "model": "Armstrong-4380",
        "name": "Header Pump",
        "specs": "In-line vertical commercial flanged circulating header pump",
        "badge": "Industrial",
        "badgeClass": "pdp-chip-teal"
      },
      "gateway": {
        "code": "G",
        "model": "SmartTouch-BMS",
        "name": "BACnet / Modbus",
        "specs": "BMS interface board for Trane, Johnson Controls & BACnet MS/TP",
        "badge": "BMS Ready",
        "badgeClass": "pdp-chip-cyan",
        "priceAdd": 1450,
        "financeAdd": 25
      }
    },
    "componentSpecs": {
      "boiler": {
        "title": "Commercial Module",
        "model": "Weil-McLain SVF Commercial 750",
        "bento": [
          {
            "label": "THERMAL EFFICIENCY",
            "value": "97.1% Thermal Eff.",
            "sub": "AHRI Commercial Certified",
            "color": "var(--green)",
            "icon": "icon-leaf"
          },
          {
            "label": "BTU OUTPUT",
            "value": "750,000 BTU",
            "sub": "Cascadable to 16,000,000 BTU Array",
            "color": "var(--cyan)",
            "icon": "icon-fire"
          },
          {
            "label": "MODULATION RATIO",
            "value": "20:1 Turndown",
            "sub": "Precision Low-Fire Winter Cycling",
            "color": "var(--text-white)",
            "icon": "icon-sliders"
          },
          {
            "label": "NOX EMISSIONS",
            "value": "< 20 ppm",
            "sub": "SCAQMD Rule 1146.2 Ultra-Low NOx",
            "color": "var(--cyan-bright)",
            "icon": "icon-shield"
          }
        ],
        "techSpecs": [
          {
            "label": "Cabinet Dimensions (H × W × D)",
            "val": "68.0\" × 32.0\" × 48.0\""
          },
          {
            "label": "Operating Weight",
            "val": "840 to 1,450 lbs (Engineered Rigging)"
          },
          {
            "label": "ASME Vessel Stamp",
            "val": "Section IV \"H\" Stamped 160 PSI Rated",
            "highlight": "var(--green)"
          },
          {
            "label": "Venting Diameter",
            "val": "6\" to 10\" Polypropylene or AL29-4C"
          },
          {
            "label": "Flanged Water Connections",
            "val": "2-1/2\" to 4\" ANSI 150# Flanges"
          },
          {
            "label": "Gas Supply Requirement",
            "val": "1-1/4\" to 2\" NPT Low/High Pressure Gas"
          },
          {
            "label": "Touchscreen Interface",
            "val": "8-Inch Full Color Cascade Manager"
          },
          {
            "label": "AHRI Commercial ID",
            "val": "#30948122",
            "highlight": "var(--cyan)"
          }
        ]
      }
    }
  }
];

if (typeof window !== 'undefined') {
  window.BOILER_PRODUCTS = BOILER_PRODUCTS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BOILER_PRODUCTS };
}
