# 🌐 English Learning

An interactive website designed to help users learn and review English grammar and vocabulary.

**status:** 🚧 Planning

## Table of Content

- [Overview](#-overview)
- [Roadmap](#-roadmap)
- [Architecture](#️-architecture)
- [Content Structure](#-content-structure)
- [Decisions](#️-decisions)
- [Notes / Lessons Learned](#-notes--lessons-learned)

---

## 💡 Overview

This project aims to create an interactive learning experience where users can:

- 📚 Learn grammar through MDX-based lessons
- 🧠 Expand vocabulary by topic
- ✅ Practice with reusable quizzes
- 🎮 Reinforce learning with mini-games
- 📊 Track progress over time (future)

---

## 🧭 Roadmap

- Define content structure (grammar + vocabulary)
- Build MDX lesson system
- Create reusable quiz engine
- Design mini-game components
- Implement progress tracking
- Connect content → interaction system

---

## ✨ Features

📚 MDX-based grammar lessons
🧠 Vocabulary by categories
✅ Reusable quiz system
🎮 Mini-games (matching, fill-in-the-blank, memory)
📊 Progress tracking (planned)
🔁 Review incorrect answers mode

---

## 🏗️ Architecture

The project is divided into three main layers:

### 1. Content Layer (MDX)

- Lessons are written in MDX
- Each lesson includes explanations + examples
- Quiz components are embedded inside MDX

---

### 2. Data Layer (JSON)

- Quizzes are stored separately from MDX
- Fully reusable across lessons
- Structured as question/answer objects

---

### 3. Interaction Layer (Components)

- Quiz system (multiple choice, fill blank, etc.)
- Mini-games (matching, memory, etc.)
- Handles user interaction + feedback

---

## 📚 Content Structure

### 📖 Lessons (MDX)

- [Grammar](./content/grammar.md)
- [Phrasal Verbs](./content/phrasal-verbs.md)
- [Common Expression](./content/common-expressions.md)

### 🧠 Vocabulary Topics

- [Grouped by category](./content/vocabulary.md)
- Each topic includes definitions + usage examples

### 🎮 Practice Content

- Quizzes
- Exercises
- Mini-games

---

## ⚙️ Decisions

- MDX for content flexibility
- JSON for quiz separation and reuse
- React components for interactivity
- Astro for fast static + island architecture

---

## 📘 Notes / Lessons Learned

- Content should be separated from logic
- Quizzes must be reusable across lessons
- MDX is best for structured learning content

---

[🡨 Back](../../README.md#-building-projects)
