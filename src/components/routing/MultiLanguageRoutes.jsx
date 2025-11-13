import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Импорты страниц  
import HomePage from '../pages/HomePage';
import About from '../pages/about/About';
import SalymbekovUniversity from '../pages/about/SalymbekovUniversity';
import InternationalCollege from '../pages/about/InternationalCollege';
import DirectorLetter from '../pages/about/DirectorLetter';
import Teachers from '../pages/about/Teachers';
import Mission from '../pages/about/Mission';
import News from '../pages/News';
import PartnerLincoln from '../pages/partners/PartnerLincoln';
import PartnerInti from '../pages/partners/PartnerInti';
import AdmissionCommittee from '../pages/admissions/AdmissionCommittee';
import Specialties from '../pages/admissions/Specialties';
import AdmissionRules from '../pages/admissions/AdmissionRules';
import AdmissionProcedure from '../pages/admissions/AdmissionProcedure';
import RequiredDocuments from '../pages/admissions/RequiredDocuments';
import SelectionSchedule from '../pages/admissions/SelectionSchedule';
import TuitionFees from '../pages/admissions/TuitionFees';
import ProgramComputerScience from '../pages/programs/ProgramComputerScience';
import ProgramMultimedia from '../pages/programs/ProgramMultimedia';
import ProgramMobile from '../pages/programs/ProgramMobile';
import InfoSystem from '../pages/student/InfoSystem';
import StudentProjects from '../pages/student/StudentProjects';
import Ebilim from '../pages/student/Ebilim';
import Lincoln from '../pages/student/Lincoln';
import Surveys from '../pages/student/Surveys';
import StudentCouncil from '../pages/student/StudentCouncil';
import DebateClub from '../pages/student/DebateClub';
import CreativeGroups from '../pages/student/CreativeGroups';
import Report2024 from '../pages/student/Report2024';
import Instructions from '../pages/student/Instructions';
import EducationalResources from '../pages/student/EducationalResources';
import StudySchedules from '../pages/student/StudySchedules';
import ModulesExams from '../pages/student/ModulesExams';
import CollegeSchedule from '../pages/student/CollegeSchedule';
import AcademicCalendar from '../pages/student/AcademicCalendar';
import Documents from '../pages/documents/Documents';
import License from '../pages/documents/License';
import Accreditation from '../pages/documents/Accreditation';
import ProgramAccreditation from '../pages/documents/ProgramAccreditation';
import CurriculumComputerScience from '../pages/curriculum/CurriculumComputerScience';
import CurriculumMultimediaComputing from '../pages/curriculum/CurriculumMultimediaComputing';
import CurriculumMultimediaPrograms from '../pages/curriculum/CurriculumMultimediaPrograms';
import DiplomaMultimedia from '../pages/curriculum/DiplomaMultimedia';
import DiplomaMobile from '../pages/curriculum/DiplomaMobile';
import DiplomaComputerScience from '../pages/curriculum/DiplomaComputerScience';
import FAQ from '../pages/FAQ';
import Vacancies from '../pages/Vacancies';
import NewsDetail from '../pages/NewsDetail';
import SpecialtyDetail from '../pages/admissions/SpecialtyDetail';
import DocumentViewer from '../pages/DocumentViewer';
import WebDevelopment from '../pages/programs/WebDevelopment';
import BusinessPrograms from '../pages/programs/BusinessProgram';
import ArtificialIntelligence from '../pages/programs/ArtificialIntelligence';
import DigitalEntrepreneurship from '../pages/programs/DigitalEntrepreneurship';
import Contacts from '../pages/Contacts';
import TestSEO from '../../test-seo';

const MultiLanguageRoutes = () => {
  const createRoutes = () => (
    <>
      {/* Главная страница */}
      <Route path="/" element={<HomePage />} />
      
      {/* О колледже */}
      <Route path="/about" element={<About />} />
      <Route path="/about/salymbekov-university" element={<SalymbekovUniversity />} />
      <Route path="/about/international-college" element={<InternationalCollege />} />
      <Route path="/about/director-letter" element={<DirectorLetter />} />
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
      <Route path="/programs/ai" element={<ArtificialIntelligence />} />
      <Route path="/programs/digital-entrepreneurship" element={<DigitalEntrepreneurship />} />
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
      <Route path="/student/instructions" element={<Instructions />} />
      <Route path="/student/resources" element={<EducationalResources />} />
      <Route path="/student/schedules" element={<StudySchedules />} />
      <Route path="/student/modules" element={<DocumentViewer documentUrl="/pdfs/График экзаменов зимней сессии 2024-2025.pdf" />} />
      <Route path="/student/timetable" element={<CollegeSchedule />} />
      <Route path="/student/calendar" element={<AcademicCalendar />} />
      
      {/* Документы */}
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/license" element={<DocumentViewer documentUrl="/pdfs/license.pdf" />} />
      <Route path="/documents/program-accreditation" element={<DocumentViewer documentUrl="/pdfs/Сертификат_колледж.PDF" />} />
      
      {/* Учебные планы */}
      <Route path="/curriculum/computer-science" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_КН_20224.PDF" />} />
      <Route path="/curriculum/multimedia-computing" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_МВ_20224.PDF" />} />
      <Route path="/curriculum/multimedia-programs" element={<DocumentViewer documentUrl="/pdfs/УП_СПО_МП_20224.PDF" />} />
      {/* <Route path="/curriculum/diploma-multimedia" element={<DocumentViewer documentUrl="/pdfs/CURRICULUM_Diploma in Multimedia Applications Area2_LINCOLN UNIVERSITY COLLEGE.pdf" />} />
      <Route path="/curriculum/diploma-mobile" element={<DocumentViewer documentUrl="/pdfs/LAST Diploma in Mobile Computing PA 4733.pdf" />} />
      <Route path="/curriculum/diploma-cs" element={<DocumentViewer documentUrl="/pdfs/LAST Diploma in COMPUTER SCIENCE Area2_LUK.pdf" />} /> */}
      
      {/* Контакты и др. */}
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/test-seo" element={<TestSEO />} />
    </>
  );

  return (
    <Routes>
      {/* Маршруты для русского языка (без префикса) */}
      {createRoutes()}
      
      {/* Маршруты для английского языка */}
      <Route path="/en/*" element={
        <Routes>
          {createRoutes()}
        </Routes>
      } />
      
      {/* Маршруты для кыргызского языка */}
      <Route path="/kg/*" element={
        <Routes>
          {createRoutes()}
        </Routes>
      } />
    </Routes>
  );
};

export default MultiLanguageRoutes;