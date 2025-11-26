import React from 'react';
import Header from './components/Header';
import StepCard from './components/StepCard';
import { PROCESS_STEPS } from './constants';
import { Wallet, Stethoscope } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dnq-bg flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 flex flex-col items-center">
        
        <div className="mb-12 text-center max-w-2xl">
            <div className="inline-block bg-white px-6 py-2 rounded-full border-2 border-dnq-light text-dnq-dark font-bold shadow-md mb-4">
                Healthcare Process
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-dnq-dark mb-4 leading-tight">
                เส้นทางการดูแลคนที่คุณรัก<br/>
                <span className="text-dnq-light">จากโรงพยาบาล สู่บ้าน</span>
            </h2>
            <p className="text-slate-600">
                มาตรฐานการบริการ DNQ (Doctor & Nurse Quality) เพื่อความอุ่นใจและคุณภาพชีวิตที่ดีของผู้ป่วย
            </p>
        </div>

        {/* The Flow Chart Container */}
        <div className="w-full flex flex-col items-center relative">
          
          {/* Background decoration line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-slate-200 -translate-x-1/2 rounded-full hidden sm:block" />

          {PROCESS_STEPS.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              isLast={index === PROCESS_STEPS.length - 1} 
            />
          ))}

          {/* Final Financial/Summary Box (Parallel Process in Diagram) */}
          <div className="mt-16 w-full max-w-md relative z-10">
              <div className="bg-dnq-dark rounded-3xl p-1 border-b-8 border-slate-800 shadow-xl">
                  <div className="bg-dnq-dark rounded-t-2xl p-4 text-center">
                      <h3 className="text-white font-bold text-xl flex items-center justify-center gap-2">
                          <Wallet size={24} className="text-dnq-light" />
                          สรุปยอดและดำเนินการ
                      </h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                      <ul className="space-y-4">
                          <li className="flex gap-3 items-center text-slate-700 font-medium p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                              สรุปยอดรายได้ / ต้นทุน
                          </li>
                          <li className="flex gap-3 items-center text-slate-700 font-medium p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                              โอนเงินให้ รพ. / ทีมการตลาด / Doctor ATOZ
                          </li>
                          <li className="flex gap-3 items-center text-slate-700 font-medium p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                              จ่ายค่าตอบแทน & ส่งประกันสังคม
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

        </div>

        <div className="mt-20 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} DNQ Doctor & Nurse Quality. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
};

export default App;
