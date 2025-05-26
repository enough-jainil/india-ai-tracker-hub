import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ExternalLinkIcon,
  BrainIcon,
  MicIcon,
  ImageIcon,
  VideoIcon,
} from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month: string;
  title: string;
  organization: string;
  description: string;
  category:
    | "LLM"
    | "TTS"
    | "Image"
    | "Video"
    | "Research"
    | "Startup"
    | "Partnership"
    | "Government"
    | "Transliteration"
    | "LID"
    | "MT"
    | "ASR";
  details: string[];
  website?: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    date: "Dec 2020",
    year: 2020,
    month: "Dec",
    title: "IndicBERT",
    organization: "AI4Bharat",
    description: "First major Indian multilingual language model",
    category: "LLM",
    details: [
      "Supports 12 Indian languages",
      "Built on BERT architecture",
      "Open source model",
      "Released by IIT Madras team",
    ],
    website: "https://ai4bharat.org",
  },
  {
    id: "2",
    date: "Mar 2022",
    year: 2022,
    month: "Mar",
    title: "IndicBART",
    organization: "AI4Bharat",
    description: "Advanced sequence-to-sequence model for Indian languages",
    category: "LLM",
    details: [
      "Improved upon IndicBERT",
      "Better text generation capabilities",
      "Enhanced multilingual support",
      "Used for translation tasks",
    ],
  },
  {
    id: "3",
    date: "Jun 2022",
    year: 2022,
    month: "Jun",
    title: "Bhashini Platform",
    organization: "Government of India",
    description: "Digital platform for AI-powered language services",
    category: "Government",
    details: [
      "Automatic speech recognition",
      "Translation services",
      "Bridge digital divides",
      "Support for all Indian languages",
    ],
  },
  {
    id: "4",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "OpenHathi",
    organization: "Sarvam AI",
    description: "First Hindi LLM based on Llama2-7B",
    category: "LLM",
    details: [
      "7B parameter model",
      "Enhanced Indic language support",
      "Real-world conversational fine-tuning",
      "Open source initiative",
    ],
    website: "https://sarvam.ai",
  },
  {
    id: "5",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "BharatGPT",
    organization: "CoRover.ai",
    description: "Government-backed multilingual LLM",
    category: "LLM",
    details: [
      "12+ Indian languages for text",
      "14 languages for voice",
      "Integrated with IRCTC and NPCI",
      "Government services focus",
    ],
    website: "https://bharatgpt.ai",
  },
  {
    id: "6",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Airavata",
    organization: "AI4Bharat",
    description: "Instruction-tuned model for Indian languages",
    category: "LLM",
    details: [
      "Fine-tuned for instruction following",
      "Supports multiple Indian languages",
      "Enhanced conversational abilities",
      "Community-driven development",
    ],
  },
  {
    id: "7",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Krutrim-1",
    organization: "Krutrim Lab",
    description: "Multilingual LLM understanding 22 Indian languages",
    category: "LLM",
    details: [
      "Understands 22 Indian languages",
      "Generates in 10 languages",
      "Commercial backing by Ola",
      "Unicorn startup status",
    ],
    website: "https://krutrim.ai",
  },
  {
    id: "8",
    date: "Feb 2024",
    year: 2024,
    month: "Feb",
    title: "Hanooman AI",
    organization: "IIT Bombay & Reliance Jio",
    description: "Multimodal AI model for Indian languages",
    category: "LLM",
    details: [
      "Supports text, speech, and vision",
      "11 Indian languages",
      "Developed by BharatGPT consortium",
      "Academic-industry collaboration",
    ],
  },
  {
    id: "9",
    date: "Mar 2024",
    year: 2024,
    month: "Mar",
    title: "Project Indus",
    organization: "Tech Mahindra",
    description: "Open-source LLM focused on Indic languages",
    category: "LLM",
    details: [
      "Available on Hugging Face",
      "Open source initiative",
      "Tailored for local needs",
      "Community-driven development",
    ],
  },
  {
    id: "10",
    date: "Apr 2024",
    year: 2024,
    month: "Apr",
    title: "Navarasa 2.0",
    organization: "Telugu LLM Labs",
    description: "Gemma 7B/2B instruction-tuned model",
    category: "LLM",
    details: [
      "Supports 16 languages (15 Indian + English)",
      "Includes Konkani, Marathi, Urdu, Assamese",
      "Expanded from previous versions",
      "Instruction-tuned capabilities",
    ],
  },
  {
    id: "11",
    date: "Jun 2024",
    year: 2024,
    month: "Jun",
    title: "RomanSetu",
    organization: "AI4Bharat",
    description: "Romanized Indian language processing",
    category: "LLM",
    details: [
      "Handles romanized Indian text",
      "Code-mixed language support",
      "Social media text processing",
      "Transliteration capabilities",
    ],
  },
  {
    id: "12",
    date: "Jul 2024",
    year: 2024,
    month: "Jul",
    title: "Paramanu",
    organization: "Gyan AI",
    description: "Lightweight LLMs optimized for Indian languages",
    category: "LLM",
    details: [
      "13mn–367mn parameters",
      "Assamese, Bangla, Hindi, Tamil support",
      "Efficiency and transparency focused",
      "Outperforms larger models in evaluations",
    ],
  },
  {
    id: "13",
    date: "Aug 2024",
    year: 2024,
    month: "Aug",
    title: "Sarvam-2B",
    organization: "Sarvam AI",
    description: "Efficient small-scale language model",
    category: "LLM",
    details: [
      "2B parameter efficient model",
      "Optimized for mobile devices",
      "Fast inference capabilities",
      "Edge deployment ready",
    ],
  },
  {
    id: "14",
    date: "Sep 2024",
    year: 2024,
    month: "Sep",
    title: "YellowG",
    organization: "Yellow.ai",
    description: "Proprietary LLM for enterprise automation",
    category: "LLM",
    details: [
      "Customer service bots",
      "Voice assistants",
      "Multiple Indian languages",
      "Enterprise automation focus",
    ],
  },
  {
    id: "15",
    date: "Oct 2024",
    year: 2024,
    month: "Oct",
    title: "Sarvam-1",
    organization: "Sarvam AI",
    description: "India's first homegrown multilingual LLM",
    category: "LLM",
    details: [
      "Trained from scratch",
      "API-first approach",
      "Multiple Indian languages",
      "Commercial deployment ready",
    ],
  },
  {
    id: "16",
    date: "Nov 2024",
    year: 2024,
    month: "Nov",
    title: "Zoho Domain LLMs",
    organization: "Zoho Corporation",
    description: "Domain-specific LLMs for business",
    category: "LLM",
    details: [
      "7–20 billion parameters",
      "Business domain focused",
      "Tailored for Indian enterprises",
      "Multiple specialized models",
    ],
  },
  {
    id: "17",
    date: "Feb 2025",
    year: 2025,
    month: "Feb",
    title: "Krutrim-2",
    organization: "Krutrim Lab",
    description: "Next-generation AI model from Ola",
    category: "LLM",
    details: [
      "Enhanced capabilities",
      "Improved language support",
      "Better reasoning abilities",
      "Expanded training data",
    ],
  },
  {
    id: "18",
    date: "Mar 2025",
    year: 2025,
    month: "Mar",
    title: "Sovereign LLMs",
    organization: "Sarvam AI (IndiaAI Mission)",
    description: "Three sovereign Indian LLM variants",
    category: "LLM",
    details: [
      "Sarvam-Large (advanced reasoning)",
      "Sarvam-Small (real-time interaction)",
      "Sarvam-Edge (on-device tasks)",
      "IndiaAI Mission backing",
    ],
  },
  {
    id: "19",
    date: "May 2025",
    year: 2025,
    month: "May",
    title: "Sarvam-m",
    organization: "Sarvam AI",
    description: "Multimodal AI advancement",
    category: "LLM",
    details: [
      "Text, image, and audio support",
      "Cross-modal understanding",
      "Enhanced reasoning",
      "Production deployment",
    ],
  },
  {
    id: "20",
    date: "May 2025",
    year: 2025,
    month: "May",
    title: "Param-1",
    organization: "BharatGen",
    description: "Next-generation Indian AI model",
    category: "LLM",
    details: [
      "Advanced architecture",
      "Comprehensive Indian language support",
      "State-of-the-art performance",
      "Research breakthrough",
    ],
  },
  {
    id: "21",
    date: "Jan 2021",
    year: 2021,
    month: "Jan",
    title: "C-DAC GIST Hindi TTS",
    organization: "C-DAC",
    description: "Comprehensive Hindi TTS system with multiple architectures",
    category: "TTS",
    details: [
      "Limited Domain TTS",
      "Generic Hybrid TTS (diphones + recorded words)",
      "Tiny TTS for embedded devices",
      "Adaptable architecture for other Indian languages",
    ],
    website: "https://cdac.in",
  },
  {
    id: "22",
    date: "Mar 2022",
    year: 2022,
    month: "Mar",
    title: "AI4Bharat Indic-TTS",
    organization: "AI4Bharat",
    description: "Open-source TTS models for 13 Indian languages",
    category: "TTS",
    details: [
      "FastPitch and HiFi-GAN architectures",
      "High-quality, natural-sounding speech",
      "Available on Bhashini platform",
      "Supports Assamese, Bengali, Hindi, Tamil, Telugu, etc.",
    ],
    website: "https://github.com/AI4Bharat/Indic-TTS",
  },
  {
    id: "23",
    date: "Jun 2022",
    year: 2022,
    month: "Jun",
    title: "IIT Madras Indic TTS Consortium",
    organization: "IIT Madras",
    description: "Collaborative TTS project for 22 Indian languages",
    category: "TTS",
    details: [
      "23 institutions collaboration",
      "High-quality synthesis focus",
      "Small-footprint models",
      "Accessibility and education applications",
    ],
    website: "https://www.iitm.ac.in/donlab/indictts",
  },
  {
    id: "24",
    date: "Sep 2023",
    year: 2023,
    month: "Sep",
    title: "SYSPIN TTS",
    organization: "IISc Bangalore",
    description: "Large corpora and TTS models for 9 Indian languages",
    category: "TTS",
    details: [
      "Open-source initiative",
      "Large corpus development",
      "Resource gap reduction",
      "Speech technology advancement",
    ],
    website: "https://syspin.iisc.ac.in",
  },
  {
    id: "25",
    date: "Jan 2024",
    year: 2024,
    month: "Jan",
    title: "Indian TTS Platform",
    organization: "Indian TTS",
    description: "Commercial TTS services for 12 Indian languages",
    category: "TTS",
    details: [
      "Online and offline voice synthesis",
      "IVR integration",
      "Screen reader support",
      "Accessibility focus for visually impaired",
    ],
    website: "https://indiantts.com",
  },
  {
    id: "26",
    date: "Mar 2024",
    year: 2024,
    month: "Mar",
    title: "AIKosh TTS",
    organization: "AIKosh",
    description: "Multi-language TTS with accessibility focus",
    category: "TTS",
    details: [
      "Multiple Indian languages support",
      "Accessibility-focused design",
      "Speech synthesis applications",
      "Government AI initiative",
    ],
    website: "https://aikosh.indiaai.gov.in",
  },
  {
    id: "27",
    date: "Aug 2024",
    year: 2024,
    month: "Aug",
    title: "Bulbul-v1",
    organization: "Sarvam AI",
    description: "Advanced TTS model for 11 Indian languages",
    category: "TTS",
    details: [
      "Natural, expressive voices",
      "Real-time synthesis capability",
      "Code-mixed language support",
      "Hindi, Marathi, Tamil, Telugu, Bengali support",
    ],
    website: "https://www.sarvam.ai/apis/text-to-speech",
  },
  {
    id: "28",
    date: "Dec 2024",
    year: 2024,
    month: "Dec",
    title: "Bulbul-v2",
    organization: "Sarvam AI",
    description: "Enhanced TTS with fine-grained voice control",
    category: "TTS",
    details: [
      "Improved voice quality",
      "Fine-grained voice control",
      "Scalable business applications",
      "Enhanced expressiveness",
    ],
    website: "https://www.sarvam.ai/apis/text-to-speech",
  },
  // Image Models
  {
    id: "29",
    date: "Jan 2022",
    year: 2022,
    month: "Jan",
    title: "BharatDiffusion",
    organization: "BharatDiffusion",
    description: "Diffusion-based image generator for Indian culture",
    category: "Image",
    details: [
      "Fine-tuned on Indian landscapes and culture",
      "Classical motifs to modern interpretations",
      "Advanced AI using Stable Diffusion",
      "Trained on vast dataset of Indian images",
    ],
    website: "https://www.bharatdiffusion.ai",
  },
  {
    id: "30",
    date: "Nov 2024",
    year: 2024,
    month: "Nov",
    title: "Kalaido.ai",
    organization: "Fractal",
    description: "Text-to-image model supporting 17 Indian languages",
    category: "Image",
    details: [
      "Supports English and 17 Indian languages",
      "Trained on 70 million images",
      "Focuses on efficiency and realism",
      "Cost-effective for commercial use",
    ],
    website: "https://fractal.ai",
  },
  // Video Models
  {
    id: "31",
    date: "Aug 2023",
    year: 2023,
    month: "Aug",
    title: "Chitralekha",
    organization: "AI4Bharat",
    description: "Open-source video transcreation platform",
    category: "Video",
    details: [
      "Subtitle generation",
      "Audio/video dubbing",
      "Video translation across Indic languages",
      "Content localization and accessibility",
    ],
    website: "https://ai4bharat.org",
  },
  {
    id: "32",
    date: "Dec 2023",
    year: 2023,
    month: "Dec",
    title: "BharatGPT Video",
    organization: "CoRover.ai",
    description: "Video generation capabilities in BharatGPT",
    category: "Video",
    details: [
      "Multi-modal content creation",
      "14+ Indian languages support",
      "Conversational AI with video",
      "Virtual assistant capabilities",
    ],
    website: "https://corover.ai/bharatgpt/",
  },
  {
    id: "33",
    date: "May 2022",
    year: 2022,
    month: "May",
    title: "Aksharantar Dataset",
    organization: "AI4Bharat",
    description:
      "Largest open-source transliteration dataset for Indian languages (21 languages, 12 scripts, 26M pairs)",
    category: "Transliteration",
    details: [
      "26 million transliteration pairs",
      "21 languages, 12 scripts",
      "First dataset to cover 7 languages and 1 language family",
      "Aksharantar test set: 103,000 word pairs",
      "EMNLP 2022 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/aksharantar",
  },
  {
    id: "34",
    date: "May 2022",
    year: 2022,
    month: "May",
    title: "IndicXlit Model",
    organization: "AI4Bharat",
    description:
      "Multilingual transliteration model trained on Aksharantar dataset, 15% accuracy improvement on benchmarks.",
    category: "Transliteration",
    details: [
      "Multilingual transliteration",
      "15% accuracy improvement",
      "Strong baselines on Aksharantar test set",
      "EMNLP 2022 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicxlit",
  },
  {
    id: "35",
    date: "May 2023",
    year: 2023,
    month: "May",
    title: "IndicLID Model",
    organization: "AI4Bharat",
    description:
      "Language identifier for native and romanized scripts, 47 classes, new standard for LID in romanized Indian text.",
    category: "LID",
    details: [
      "Supports 47 classes (24 native, 21 roman, English, Others)",
      "New standard for LID in romanized Indian text",
      "ACL 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indiclid",
  },
  {
    id: "36",
    date: "July 2023",
    year: 2023,
    month: "July",
    title: "Bhasha-Abhijnaanam Dataset",
    organization: "AI4Bharat",
    description:
      "Comprehensive LID test set for native-script and romanized text, spanning all 22 Indic languages.",
    category: "LID",
    details: [
      "Covers all 22 Indic languages",
      "Native-script and romanized text",
      "ACL 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/bhasha-abhijnaanam",
  },
  {
    id: "37",
    date: "April 2021",
    year: 2021,
    month: "April",
    title: "Samanantar Corpus",
    organization: "AI4Bharat",
    description:
      "Largest publicly available parallel corpus for Indic languages with 49.7M sentence pairs between English and 11 Indic languages.",
    category: "MT",
    details: [
      "49.7 million sentence pairs (English-Indic)",
      "37.4 million newly mined pairs",
      "83.4 million pairs between 55 Indic language pairs",
      "TACL 2021 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/samanantar",
  },
  {
    id: "38",
    date: "April 2021",
    year: 2021,
    month: "April",
    title: "IndicTrans Model",
    organization: "AI4Bharat",
    description:
      "Transformer-based multilingual NMT model trained on Samanantar dataset, outperforming existing models on FLORES benchmarks.",
    category: "MT",
    details: [
      "Transformer-based multilingual NMT",
      "Trained on Samanantar dataset",
      "Outperforms existing models on FLORES",
      "TACL 2021 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indictrans",
  },
  {
    id: "39",
    date: "May 2023",
    year: 2023,
    month: "May",
    title: "BPCC Dataset",
    organization: "AI4Bharat",
    description:
      "Comprehensive parallel corpus for all 22 scheduled Indic languages with 228M mined pairs and 2.2M gold-standard pairs.",
    category: "MT",
    details: [
      "228 million mined pairs (126M newly added)",
      "2.2 million gold-standard English-Indic pairs",
      "First datasets for 7 languages",
      "TMLR 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/bpcc",
  },
  {
    id: "40",
    date: "May 2023",
    year: 2023,
    month: "May",
    title: "IndicTrans2 Model",
    organization: "AI4Bharat",
    description:
      "First open-source Transformer-based multilingual NMT model for all 22 scheduled Indic languages with script unification.",
    category: "MT",
    details: [
      "Supports all 22 scheduled Indic languages",
      "Multiple scripts for low-resource languages",
      "Script unification for enhanced transfer learning",
      "TMLR 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indictrans2",
  },
  {
    id: "41",
    date: "May 2023",
    year: 2023,
    month: "May",
    title: "CTQAScorer Model",
    organization: "AI4Bharat",
    description:
      "Regression model that selects examples based on multiple features to maximize translation quality.",
    category: "MT",
    details: [
      "Example selection for translation quality",
      "Multiple feature-based regression",
      "EMNLP 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/ctqascorer",
  },
  {
    id: "42",
    date: "July 2023",
    year: 2023,
    month: "July",
    title: "IndicMT-Eval Dataset",
    organization: "AI4Bharat",
    description:
      "Comprehensive MQM dataset with 7,000 detailed annotations covering five Indian languages and seven MT systems.",
    category: "MT",
    details: [
      "7,000 detailed MQM annotations",
      "Five Indian languages coverage",
      "Seven MT systems evaluation",
      "ACL 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicmt-eval",
  },
  {
    id: "43",
    date: "December 2023",
    year: 2023,
    month: "December",
    title: "DecoMT Model",
    organization: "AI4Bharat",
    description:
      "Novel few-shot prompting approach that breaks down translation into word chunk translations.",
    category: "MT",
    details: [
      "Few-shot prompting approach",
      "Word chunk translation decomposition",
      "EMNLP 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/decomt",
  },
  {
    id: "44",
    date: "November 2024",
    year: 2024,
    month: "November",
    title: "BhasaAnuvaad Dataset",
    organization: "AI4Bharat",
    description:
      "Largest Indic-language Speech Translation dataset with 44,400 hours of speech and 17 million text segments.",
    category: "MT",
    details: [
      "44,400 hours of speech",
      "17 million text segments",
      "13 of 22 scheduled Indian languages + English",
      "ARXIV 2024 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/bhasaanuvaad",
  },
  {
    id: "45",
    date: "June 2021",
    year: 2021,
    month: "June",
    title: "IndicTTS",
    organization: "AI4Bharat",
    description:
      "Multilingual text-to-speech synthesis system for 10 Indian languages with natural-sounding speech output.",
    category: "TTS",
    details: [
      "Supports 10 Indian languages",
      "Natural-sounding speech output",
      "INTERSPEECH 2021 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indictts",
  },
  {
    id: "46",
    date: "July 2021",
    year: 2021,
    month: "July",
    title: "IndicASR",
    organization: "AI4Bharat",
    description:
      "Multilingual ASR model for 11 Indian languages achieving state-of-the-art performance on Indic speech benchmarks.",
    category: "ASR",
    details: [
      "Supports 11 Indian languages",
      "State-of-the-art performance on Indic benchmarks",
      "INTERSPEECH 2021 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicasr",
  },
  {
    id: "47",
    date: "April 2022",
    year: 2022,
    month: "April",
    title: "Bhasha-Abhilekh",
    organization: "AI4Bharat",
    description:
      "Large-scale speech corpus for 10 Indian languages designed to train and evaluate ASR models.",
    category: "ASR",
    details: [
      "Large-scale speech corpus",
      "10 Indian languages",
      "Designed for ASR training and evaluation",
      "LREC 2022 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/bhasha-abhilekh",
  },
  {
    id: "48",
    date: "October 2022",
    year: 2022,
    month: "October",
    title: "IndicGPT",
    organization: "AI4Bharat",
    description:
      "Large-scale generative language model for Indian languages trained on massive corpus of Indic text.",
    category: "LLM",
    details: [
      "Large-scale generative language model",
      "Trained on massive Indic text corpus",
      "NeurIPS 2022 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicgpt",
  },
  {
    id: "49",
    date: "November 2022",
    year: 2022,
    month: "November",
    title: "Bhasha-Abhigyan",
    organization: "AI4Bharat",
    description:
      "Comprehensive speech synthesis dataset for 12 Indian languages with diverse speakers and speaking styles.",
    category: "TTS",
    details: [
      "12 Indian languages coverage",
      "Diverse speakers and speaking styles",
      "EMNLP 2022 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/bhasha-abhigyan",
  },
  {
    id: "50",
    date: "March 2023",
    year: 2023,
    month: "March",
    title: "IndicVoices",
    organization: "AI4Bharat",
    description:
      "Collection of high-quality, open-source voice models for 15 Indian languages enabling custom voice applications.",
    category: "TTS",
    details: [
      "15 Indian languages support",
      "High-quality voice models",
      "Open-source collection",
      "Enables custom voice applications",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicvoices",
  },
  {
    id: "51",
    date: "May 2023",
    year: 2023,
    month: "May",
    title: "IndicULM",
    organization: "AI4Bharat",
    description:
      "Universal language model supporting code-switching and cross-lingual transfer for Indic languages.",
    category: "LLM",
    details: [
      "Universal language model",
      "Code-switching support",
      "Cross-lingual transfer for Indic languages",
      "EACL 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indiculm",
  },
  {
    id: "52",
    date: "November 2023",
    year: 2023,
    month: "November",
    title: "IndicDiarize",
    organization: "AI4Bharat",
    description:
      "Speaker diarization toolkit for Indic languages that identifies different speakers in audio recordings.",
    category: "ASR",
    details: [
      "Speaker diarization for Indic languages",
      "Identifies different speakers in recordings",
      "IEEE SLT 2023 publication",
    ],
    website: "https://ai4bharat.iitm.ac.in/indicdiarize",
  },
  {
    id: "53",
    date: "December 2023",
    year: 2023,
    month: "December",
    title: "A-star Toolkit",
    organization: "AI4Bharat",
    description:
      "Open-source toolkit for building and deploying ASR systems for Indian languages.",
    category: "ASR",
    details: [
      "Open-source ASR toolkit",
      "Building and deploying ASR systems",
      "Focused on Indian languages",
      "GitHub release",
    ],
    website: "https://github.com/AI4Bharat/A-star",
  },
];

interface InteractiveTimelineProps {
  searchTerm: string;
}

export const InteractiveTimeline = ({
  searchTerm,
}: InteractiveTimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredData = timelineData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear = selectedYear ? event.year === selectedYear : true;
    const matchesCategory = selectedCategory
      ? event.category === selectedCategory
      : true;

    return matchesSearch && matchesYear && matchesCategory;
  });

  const years = Array.from(
    new Set(timelineData.map((event) => event.year))
  ).sort();
  const categories = [
    "LLM",
    "TTS",
    "Image",
    "Video",
    "Government",
    "Transliteration",
    "LID",
    "MT",
    "ASR",
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "LLM":
        return "bg-blue-100 text-blue-800";
      case "TTS":
        return "bg-purple-100 text-purple-800";
      case "Image":
        return "bg-pink-100 text-pink-800";
      case "Video":
        return "bg-indigo-100 text-indigo-800";
      case "Research":
        return "bg-green-100 text-green-800";
      case "Startup":
        return "bg-orange-100 text-orange-800";
      case "Partnership":
        return "bg-yellow-100 text-yellow-800";
      case "Government":
        return "bg-red-100 text-red-800";
      case "Transliteration":
        return "bg-teal-100 text-teal-800";
      case "LID":
        return "bg-lime-100 text-lime-800";
      case "MT":
        return "bg-orange-100 text-orange-800";
      case "ASR":
        return "bg-cyan-100 text-cyan-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "TTS":
        return MicIcon;
      case "Image":
        return ImageIcon;
      case "Video":
        return VideoIcon;
      default:
        return BrainIcon;
    }
  };

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case "TTS":
        return "border-purple-500";
      case "Image":
        return "border-pink-500";
      case "Video":
        return "border-indigo-500";
      default:
        return "border-blue-500";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "TTS":
        return "text-purple-500";
      case "Image":
        return "text-pink-500";
      case "Video":
        return "text-indigo-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="space-y-4">
        {/* Year Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedYear === null ? "default" : "outline"}
            onClick={() => setSelectedYear(null)}
            className="rounded-full text-xs sm:text-sm"
            size="sm"
          >
            All Years
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
              className="rounded-full text-xs sm:text-sm"
              size="sm"
            >
              {year}
            </Button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full text-xs sm:text-sm"
            size="sm"
          >
            All Types
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full text-xs sm:text-sm"
              size="sm"
            >
              {category === "LLM"
                ? "LLMs"
                : category === "TTS"
                ? "Text-to-Speech"
                : category === "Image"
                ? "Image Generation"
                : category === "Video"
                ? "Video Generation"
                : category === "Transliteration"
                ? "Transliteration"
                : category === "LID"
                ? "LID"
                : category === "MT"
                ? "Machine Translation"
                : category === "ASR"
                ? "ASR"
                : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {filteredData.map((event, index) => {
            const IconComponent = getCategoryIcon(event.category);
            const borderColor = getCategoryBorderColor(event.category);
            const textColor = getCategoryTextColor(event.category);

            return (
              <div
                key={event.id}
                className="relative flex items-start space-x-2 sm:space-x-3 md:space-x-6"
              >
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white border-2 sm:border-2 md:border-3 lg:border-4 ${borderColor} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <IconComponent
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 ${textColor}`}
                  />
                </div>

                <Card
                  className={`flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedEvent?.id === event.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() =>
                    setSelectedEvent(
                      selectedEvent?.id === event.id ? null : event
                    )
                  }
                >
                  <CardHeader className="pb-2 sm:pb-3 md:pb-4 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                        <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap gap-1">
                          <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">
                            {event.date}
                          </span>
                          <Badge
                            className={`${getCategoryColor(
                              event.category
                            )} text-xs px-1.5 py-0.5`}
                          >
                            {event.category === "LLM"
                              ? "LLM"
                              : event.category === "TTS"
                              ? "TTS"
                              : event.category === "Image"
                              ? "Image"
                              : event.category === "Video"
                              ? "Video"
                              : event.category === "Transliteration"
                              ? "Transliteration"
                              : event.category === "LID"
                              ? "LID"
                              : event.category === "MT"
                              ? "Machine Translation"
                              : event.category === "ASR"
                              ? "ASR"
                              : event.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-base sm:text-lg md:text-xl text-gray-900 break-words leading-tight">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600 font-medium text-xs sm:text-sm md:text-base break-words">
                          {event.organization}
                        </CardDescription>
                      </div>
                      {event.website && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex-shrink-0 ml-1 sm:ml-2 p-1 sm:p-2"
                        >
                          <a
                            href={event.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                    <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words leading-tight sm:leading-normal">
                      {event.description}
                    </p>

                    {selectedEvent?.id === event.id && (
                      <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                          Key Features:
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {event.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-1.5 sm:space-x-2"
                            >
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-xs sm:text-sm md:text-base break-words leading-tight sm:leading-normal">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <BrainIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No results found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};
