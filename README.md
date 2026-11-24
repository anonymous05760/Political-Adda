
<img width="926" height="314" alt="image" src="https://github.com/user-attachments/assets/8424e30a-d15b-400b-b408-9938ea4aecd9" />
# RPSC Political Science Hub

An interactive EdTech Learning Management System (LMS) web application built for aspirants preparing for **RPSC Political Science** exams (1st Grade School Lecturer, Assistant Professor, RAS Mains, and Foundation). Built with clean, separated **HTML**, **CSS**, and **JavaScript** files and client-side `localStorage` state persistence.

## Features

- **Course Store & Filtering:** Browse RPSC Political Science batches with category filters (All Batches, 1st Grade, Assistant Professor, RAS Mains, Free) and live keyword search.
- **Checkout & Creator Earnings Simulation:** Purchase paid batches using a simulated UPI QR/ID, Card, or NetBanking modal with coupon support (`RPSC10` for 10% off), automatic batch unlocking, and a live **Creator Earnings (₹)** tracker.
- **Interactive Classroom:** Watch embedded lectures, switch across batch playlists, download study notes, solve 5-question Daily Practice Problem (DPP) quizzes with instant explanations, and post questions on the Student Doubts board.
- **Timed RPSC Mock Test Series:** Take a countdown-timed MCQ test with a question status palette, RPSC-style negative marking (`-0.66`), and a detailed score summary.
- **Admin Studio:** Add new RPSC batches and append new lectures with notes and DPP questions directly into the platform state.

## Project Structure

```text
├── index.html   # Page layout, modals, classroom view, and test interface
├── styles.css   # Custom styles, responsive layout, and animations
└── app.js       # State management, catalog, checkout, classroom, mock test, and admin logic
