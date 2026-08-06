#!/usr/bin/env python3
import os
import json
from datetime import datetime

# Path where Next.js reads markdown articles
CONTENT_DIR = os.path.join(os.path.dirname(__file__), "content", "blog")

# Technical Article Bank - Optimized for Tier-1 OEMs and Engineering Plastics
TOPIC_BANK = [
    {
        "title": "Optimizing Injection Pressure for Glass-Filled Nylon PA66 in Automotive Clips",
        "category": "Process Engineering",
        "slug": "optimizing-injection-pressure-pa66-automotive-clips",
        "keywords": ["PA66 Injection Moulding", "Glass Filled Nylon", "Maruti Suzuki Fasteners", "Sink Mark Prevention"],
        "target_oem": "Maruti Suzuki Tier-1 Standards",
        "core_resin": "PA66 30% GF"
    },
    {
        "title": "Hydrostatic Burst Pressure Compliance in Food-Grade SAN Water Filter Housings",
        "category": "Quality Control",
        "slug": "hydrostatic-burst-pressure-san-filter-housings",
        "keywords": ["SAN Resin Moulding", "Aquaguard Compliance", "Pneumatic Pressure Testing", "Food Grade Plastics"],
        "target_oem": "Aquaguard Water Purification",
        "core_resin": "SAN (Styrene Acrylonitrile)"
    },
    {
        "title": "Friction Coefficient & Wear Lifecycle in POM Acetal Architectural Bushings",
        "category": "Material Science",
        "slug": "wear-lifecycle-pom-acetal-architectural-bushings",
        "keywords": ["POM Delrin Bushings", "Ozone Glass Fittings", "Tribology in Plastics", "Dimensional Stability"],
        "target_oem": "Ozone Architectural Hardware",
        "core_resin": "POM Acetal Homopolymer"
    }
]

def ensure_content_dir():
    if not os.path.exists(CONTENT_DIR):
        os.makedirs(CONTENT_DIR)
        print("[+] Created content directory: " + CONTENT_DIR)

def generate_markdown_article(topic):
    today = datetime.now().strftime("%Y-%m-%d")
    title = topic['title']
    category = topic['category']
    core_resin = topic['core_resin']
    target_oem = topic['target_oem']
    keywords_json = json.dumps(topic['keywords'])

    lines = [
        "---",
        'title: "' + title + '"',
        'date: "' + today + '"',
        'category: "' + category + '"',
        'excerpt: "An in-depth engineering compliance analysis on processing ' + core_resin + ' to satisfy strict ' + target_oem + ' quality thresholds."',
        'metaDescription: "Technical guidelines for processing ' + core_resin + '. Covers cycle time, pressure curves, defect reduction, and compliance with ' + target_oem + '."',
        'keywords: ' + keywords_json,
        'readingTime: "6 min read"',
        "---",
        "",
        "## Executive Summary",
        "",
        "When manufacturing high-tolerance components for leading OEMs such as **" + target_oem + "**, precise polymer processing parameters are required to eliminate structural defects, internal stress, and dimensional variance.",
        "",
        "This technical report details optimized processing parameters for **" + core_resin + "**, focusing on cycle time minimization, hold pressure optimization, and quality assurance protocols.",
        "",
        "---",
        "",
        "## Technical Specifications & Resin Behavior",
        "",
        "Processing **" + core_resin + "** requires precise thermal control to maintain tensile strength and molecular structure.",
        "",
        "### Key Processing Parameters",
        "* **Melt Temperature:** 275°C – 295°C",
        "* **Mould Temperature:** 80°C – 95°C",
        "* **Injection Speed:** Multi-stage injection profile (Slow-Fast-Slow)",
        "* **Hold Pressure:** 60% – 75% of peak injection pressure",
        "",
        "---",
        "",
        "## Defect Mitigation & OEM Compliance",
        "",
        "To fulfill the rigorous zero-defect requirement for **" + target_oem + "**, quality inspectors perform rigorous destructive and non-destructive testing:",
        "",
        "1. **Dimensional Tolerance Checks:** Continuous CMM inspection verifying accuracy down to ±0.02mm.",
        "2. **Structural Integrity:** Ultrasonic weld line verification and cross-section void analysis.",
        "3. **Environmental Stress Testing:** Accelerated thermal cycling and fluid exposure evaluation.",
        "",
        "```",
        "[Moulding Cycle Optimization Matrix]",
        "Injection Phase   ---> Hold Phase         ---> Cooling Phase",
        "(High Velocity)        (70% Peak Pressure)     (Thermal Uniformity)",
        "```",
        "",
        "---",
        "",
        "## Conclusion & Actionable Steps",
        "",
        "By adhering to these processing controls for **" + core_resin + "**, contract manufacturers ensure complete compliance with **" + target_oem + "** specifications while maintaining maximum production line throughput."
    ]

    return "\n".join(lines)

def run_publisher():
    print("==================================================")
    print("  AD POLYMERS - AUTOMATED TECHNICAL PUBLISHER    ")
    print("==================================================")
    
    ensure_content_dir()
    
    published_count = 0
    for topic in TOPIC_BANK:
        filename = topic['slug'] + ".md"
        filepath = os.path.join(CONTENT_DIR, filename)
        
        article_content = generate_markdown_article(topic)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(article_content)
            
        published_count += 1
        print("[+] Published SEO Article (" + str(published_count) + "/" + str(len(TOPIC_BANK)) + "): " + filename)

    print("\n[SUCCESS] All technical articles written to /content/blog!")

if __name__ == "__main__":
    run_publisher()