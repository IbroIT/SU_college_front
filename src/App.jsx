import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/pages/Footer';
import Contacts from './components/pages/Contacts';
import { useTranslation } from 'react-i18next';

// Импорты страниц
import HomePage from './components/pages/HomePage';
import AboutCollege from './components/pages/about/AboutCollege';
import About from './components/pages/about/About';
import SalymbekovUniversity from './components/pages/about/SalymbekovUniversity';
import InternationalCollege from './components/pages/about/InternationalCollege';
import DirectorLetter from './components/pages/about/DirectorLetter';
import Teachers from './components/pages/about/Teachers';
import Mission from './components/pages/about/Mission';
import News from './components/pages/News';
import PartnerLincoln from './components/pages/partners/PartnerLincoln';
import PartnerInti from './components/pages/partners/PartnerInti';
import AdmissionCommittee from './components/pages/admissions/AdmissionCommittee';
import Specialties from './components/pages/admissions/Specialties';
import AdmissionRules from './components/pages/admissions/AdmissionRules';
import AdmissionProcedure from './components/pages/admissions/AdmissionProcedure';
import RequiredDocuments from './components/pages/admissions/RequiredDocuments';
import SelectionSchedule from './components/pages/admissions/SelectionSchedule';
import TuitionFees from './components/pages/admissions/TuitionFees';
import ProgramComputerScience from './components/pages/programs/ProgramComputerScience';
import ProgramMultimedia from './components/pages/programs/ProgramMultimedia';
import ProgramMobile from './components/pages/programs/ProgramMobile';
import InfoSystem from './components/pages/student/InfoSystem';
import StudentProjects from './components/pages/student/StudentProjects';
import Ebilim from './components/pages/student/Ebilim';
import Lincoln from './components/pages/student/Lincoln';
import Surveys from './components/pages/student/Surveys';
import StudentCouncil from './components/pages/student/StudentCouncil';
import DebateClub from './components/pages/student/DebateClub';
import CreativeGroups from './components/pages/student/CreativeGroups';
import Report2024 from './components/pages/student/Report2024';
import Instructions from './components/pages/student/Instructions';
import EducationalResources from './components/pages/student/EducationalResources';
import StudySchedules from './components/pages/student/StudySchedules';
import ModulesExams from './components/pages/student/ModulesExams';
import CollegeSchedule from './components/pages/student/CollegeSchedule';
import AcademicCalendar from './components/pages/student/AcademicCalendar';
import Documents from './components/pages/documents/Documents';
import License from './components/pages/documents/License';
import Accreditation from './components/pages/documents/Accreditation';
import ProgramAccreditation from './components/pages/documents/ProgramAccreditation';
import CurriculumComputerScience from './components/pages/curriculum/CurriculumComputerScience';
import CurriculumMultimediaComputing from './components/pages/curriculum/CurriculumMultimediaComputing';
import CurriculumMultimediaPrograms from './components/pages/curriculum/CurriculumMultimediaPrograms';
import DiplomaMultimedia from './components/pages/curriculum/DiplomaMultimedia';
import DiplomaMobile from './components/pages/curriculum/DiplomaMobile';
import DiplomaComputerScience from './components/pages/curriculum/DiplomaComputerScience';
import FAQ from './components/pages/FAQ';
import Vacancies from './components/pages/Vacancies';
import NewsDetail from './components/pages/NewsDetail';
import SpecialtyDetail from './components/pages/admissions/SpecialtyDetail';
import DocumentViewer from './components/pages/DocumentViewer';
import WebDevelopment from './components/pages/programs/WebDevelopment';
import BusinessPrograms from './components/pages/programs/BusinessProgram';

function App() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'kg', name: 'Кыргызча' },
    { code: 'en', name: 'English' }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          currentLanguage={i18n.language}
          languages={languages}
          changeLanguage={handleLanguageChange}
        />
        
        <main>
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<HomePage />} />
            
            {/* О колледже */}
            <Route path="/about" element={<About />} />
            <Route path="/about/salymbekov-university" element={<SalymbekovUniversity />} />
            <Route path="/about/international-college" element={<InternationalCollege />} />
            <Route path="/about/director-letter" element={<DirectorLetter />} />
            <Route path="/about/teachers" element={<Teachers />} />
            <Route path="/about/mission" element={<Mission />} />
            
            {/* Новости */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            
            {/* Партнеры */}
            <Route path="/partners/lincoln" element={<PartnerLincoln />} />
            <Route path="/partners/inti" element={<PartnerInti />} />
            
            {/* Абитуриенту */}
            <Route path="/admissions/committee" element={<AdmissionCommittee />} />
            <Route path="/admissions/specialties" element={<Specialties />} />
            <Route path="/specialties/:id" element={<SpecialtyDetail />} />
            <Route path="/admissions/rules" element={<AdmissionRules />} />
            <Route path="/admissions/procedure" element={<AdmissionProcedure />} />
            <Route path="/admissions/documents" element={<RequiredDocuments />} />
            <Route path="/admissions/schedule" element={<SelectionSchedule />} />
            <Route path="/admissions/tuition" element={<TuitionFees />} />
            
            {/* Программы */}
            <Route path="/programs/computer-science" element={<ProgramComputerScience />} />
            <Route path="/programs/multimedia" element={<ProgramMultimedia />} />
            <Route path="/programs/mobile" element={<ProgramMobile />} />
            <Route path="/programs/webdev" element={<WebDevelopment />} />
            <Route path="/programs/business" element={<BusinessPrograms />} />
            
            {/* Студенту */}
            <Route path="/student/info-system" element={<InfoSystem />} />
            <Route path="/student/projects" element={<StudentProjects />} />
            <Route path="/student/ebilim" element={<Ebilim />} />
            <Route path="/student/lincoln" element={<Lincoln />} />
            <Route path="/student/surveys" element={<Surveys />} />
            <Route path="/student/council" element={<StudentCouncil />} />
            <Route path="/student/debate" element={<DebateClub />} />
            <Route path="/student/creative" element={<CreativeGroups />} />
            <Route path="/student/report-2024" element={<DocumentViewer documentUrl="/pdfs/Отчет с диаграммами 2024 (1).pdf" />} />
            <Route path="/student/instructions" element={<Instructions />} />
            <Route path="/student/resources" element={<EducationalResources />} />
            <Route path="/student/schedules" element={<StudySchedules />} />
            <Route path="/student/modules" element={<DocumentViewer documentUrl="/pdfs/График экзаменов зимней сессии 2024-2025.pdf" />} />
            <Route path="/student/timetable" element={<CollegeSchedule />} />
            <Route path="/student/calendar" element={<AcademicCalendar />} />
            
            {/* Документы */}
            <Route path="/documents" element={<Documents />} />
            <Route path="/documents/license" element={<DocumentViewer documentUrl="/pdfs/license.pdf" />} />
            <Route path="/documents/accreditation" element={<DocumentViewer documentUrl="/pdfs/2. International Institutional accreditation.pdf" />}  />
            <Route path="/documents/program-accreditation" element={<DocumentViewer documentUrl="/pdfs/Сертификат_колледж.PDF" />} />
            
            {/* Учебные планы */}
            <Route path="/curriculum/computer-science" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_КН_20224.PDF" />} />
            <Route path="/curriculum/multimedia-computing" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_МВ_20224.PDF" />} />
            <Route path="/curriculum/multimedia-programs" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_МП_20224.PDF" />} />
            <Route path="/curriculum/diploma-multimedia" element={<DocumentViewer documentUrl="/pdfs/CURRICULUM_Diploma in Multimedia Applications Area2_LINCOLN UNIVERSITY COLLEGE.pdf" />} />
            <Route path="/curriculum/diploma-mobile" element={<DocumentViewer documentUrl="/pdfs/LAST Diploma in Mobile Computing PA 4733.pdf" />} />
            <Route path="/curriculum/diploma-cs" element={<DocumentViewer documentUrl="/pdfs/LAST Diploma in COMPUTER SCIENCE Area2_LUK.pdf" />} />
            
            {/* Контакты и др. */}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;