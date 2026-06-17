# Java IPA Preparation - Personal Study Companion

A clean, minimal React + Vite application for personal Java IPA (Incentive Practice Assessment) exam preparation. This tool helps you organize, learn, and revise 123 Java programming questions extracted from the TCS IPA Questions repository.

## Features

✅ **123 Pre-loaded Java Questions** - All questions from the Java-Solutions-TCS-IPA-Questions repository
✅ **Smart Search & Filtering** - Search by title, filter by topic and difficulty level
✅ **Structured Learning Path** - 4-phase roadmap: Beginner → Intermediate → IPA Pattern → Mixed Revision
✅ **Progress Tracking** - Mark questions as: Unattempted → Solved → Need Revision → Mastered
✅ **Personal Notes** - Add notes and observations for each question
✅ **Hint System** - 2-level hints for each question without immediately revealing solution
✅ **Mock Tests** - Generate random tests (3, 5, or 10 questions) with timer
✅ **Statistics Dashboard** - Track progress by topic and difficulty, identify weak/strong areas
✅ **Revision Management** - Quick access to questions marked for revision
✅ **Local Storage** - All progress saved locally (no backend required)
✅ **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- **React 18.2** - UI library
- **Vite 5** - Fast build tool and dev server
- **React Router 6** - Client-side routing
- **CSS 3** - Minimal, clean styling
- **localStorage API** - Local data persistence

## Project Structure

```
java-ipa-prep/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Badge.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   └── QuestionCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AllQuestionsPage.jsx
│   │   ├── QuestionDetailsPage.jsx
│   │   ├── RoadmapPage.jsx
│   │   ├── RevisionPage.jsx
│   │   ├── MockTestPage.jsx
│   │   └── StatisticsPage.jsx
│   ├── data/
│   │   └── questions.json (123 questions with solutions, hints, metadata)
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── ProgressBar.css
│   │   ├── Badge.css
│   │   ├── SearchBar.css
│   │   ├── FilterPanel.css
│   │   ├── QuestionCard.css
│   │   ├── HomePage.css
│   │   ├── AllQuestionsPage.css
│   │   ├── QuestionDetailsPage.css
│   │   ├── RoadmapPage.css
│   │   ├── RevisionPage.css
│   │   ├── MockTestPage.css
│   │   └── StatisticsPage.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Step 1: Navigate to the project directory
```bash
cd java-ipa-prep
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start the development server
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`

## Usage Guide

### Home Page
- View overall progress statistics
- See total questions, solved count, and mastery percentage
- Quick access to all major features

### All Questions Page
- **Search**: Find questions by title or topic
- **Filter by Topic**: Arrays, Strings, OOP, Collections, Sorting, Searching, Employee Problems, Student Problems, etc.
- **Filter by Difficulty**: Easy, Medium, Hard
- **Status Badges**: See progress at a glance (Unattempted, Solved, Need Revision, Mastered)

### Question Details Page
- Read the complete problem statement
- Get 2 levels of hints without spoiling the solution
- Reveal the full Java solution code
- Add personal notes and observations
- Mark question status with one click
- Status options: Unattempted, Solved, Need Revision, Mastered

### Learning Roadmap
- **Phase 1 - Beginner**: All Easy difficulty questions
- **Phase 2 - Intermediate**: All Medium difficulty questions
- **Phase 3 - IPA Pattern Questions**: Real IPA exam style questions
- **Phase 4 - Mixed Revision**: All Hard difficulty questions
- Follow the roadmap for structured learning

### Revision Page
- View all questions marked as "Need Revision"
- Quick navigation between revision questions
- Perfect for pre-exam preparation

### Mock Test Page
- **Generate Tests**: Choose from 3, 5, or 10 question tests
- **Timer**: 2 minutes per question automatically
- **Question Navigation**: Click on question numbers to jump
- **Progress Tracking**: Visual indication of answered questions
- **Review**: See results after submission

### Statistics Page
- **Overall Completion**: Progress percentage
- **Solved by Topic**: Visual breakdown of mastered topics
- **Solved by Difficulty**: Performance across difficulty levels
- **Weak Areas**: Topics needing more practice
- **Strong Areas**: Topics mastered

## Data Persistence

All your progress is automatically saved to your browser's localStorage:
- Question status (Unattempted, Solved, Need Revision, Mastered)
- Personal notes for each question
- Mock test results
- Progress statistics

Data is stored locally and never sent anywhere. Clear browser data to reset progress.

## Question Database

The project includes 123 Java programming questions with:
- Unique ID and title
- Complete problem statement
- Full Java solution code
- Expected input/output examples (where available)
- 2 contextual hints for each question
- Difficulty classification (Easy/Medium/Hard)
- Topic categorization (Arrays, Strings, OOP, Collections, etc.)
- Main concepts used

## Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory. Deploy by copying contents of `dist/` to your web server.

To preview production build locally:
```bash
npm run preview
```

## Source Repository

Questions are extracted from: https://github.com/Arijit-SE/Java-Solutions-TCS-IPA-Questions

All 123 questions are included in the `src/data/questions.json` file.

## Tips for Best Learning Experience

1. **Follow the Roadmap** - Start with Phase 1 (Beginner) and progress through phases
2. **Use Hints First** - Try to solve using hints before revealing the full solution
3. **Add Notes** - Document your approach and key learnings for each question
4. **Mark for Revision** - Identify difficult questions and review them regularly
5. **Take Mock Tests** - Use tests to assess your preparation level
6. **Review Statistics** - Identify weak areas and focus your practice

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal CSS (no external dependencies)
- Fast load times with Vite
- Smooth animations and transitions
- Responsive design adapts to all screen sizes

## Keyboard Shortcuts

While on Question Details page:
- Save notes with consistent formatting
- Use status buttons for quick progress updates

## Limitations & Notes

- This is a personal study tool, not designed for multi-user deployment
- All data stored locally in browser (no cloud sync)
- localStorage capacity is typically 5-10MB (more than enough for this app)
- No backend required - 100% client-side application

## Future Enhancements (Optional)

Possible future improvements:
- Export progress as PDF
- Dark mode theme
- Question categories filter
- Performance timeline charts
- Custom test creation
- Keyboard shortcuts guide
- Browser sync across devices (with sync feature)

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will use the next available port.

### Questions not loading
Ensure `src/data/questions.json` exists and is valid JSON.

### Progress not saving
Check if localStorage is enabled in your browser. Clear cache and refresh if needed.

### Slow performance on older devices
Consider using a modern browser or reducing question grid size.

## License

This project is for personal educational use. Questions are sourced from the TCS IPA repository.

## Support

For issues or questions about the application, check the browser console for error messages (F12 → Console).

---

**Happy Learning! 🚀**

Created for TCS IPA exam preparation. Focus on understanding, practice consistently, and track your progress.
