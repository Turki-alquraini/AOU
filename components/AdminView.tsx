import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  AlertTriangle, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { MarketTrend, CurriculumGap } from '../types';

const marketTrends: MarketTrend[] = [
  { skill: "React Native", growth: "+45%", demand: "عالي جداً" },
  { skill: "Cybersecurity Ops", growth: "+30%", demand: "عالي" },
  { skill: "AI Prompt Eng", growth: "+120%", demand: "متفجر" },
];

const curriculumGaps: CurriculumGap[] = [
  { subject: "تطوير الويب", status: "قديم", issue: "المنهج يعتمد على PHP 5", suggestion: "تحديث إلى Node.js & React" },
  { subject: "أمن المعلومات", status: "ناقص", issue: "غياب التطبيق العملي", suggestion: "إضافة معامل افتراضية" },
];

const AdminView: React.FC = () => {
  const [showAiSuggestion, setShowAiSuggestion] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="border-r-4 border-r-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm mb-1">مؤشر ملاءمة المنهج</p>
              <h3 className="text-3xl font-bold text-slate-800">85%</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle2 className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <ArrowUpRight size={16} />
            <span className="mr-1">+5% عن الفصل الماضي</span>
          </div>
        </Card>

        <Card className="border-r-4 border-r-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm mb-1">مهارات جديدة مطلوبة</p>
              <h3 className="text-3xl font-bold text-slate-800">12</h3>
            </div>
            <div className="p-2 bg-yellow-50 rounded-lg">
              <TrendingUp className="text-yellow-600" size={24} />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">تم رصدها في LinkedIn السعودية</p>
        </Card>

        <Card className="border-r-4 border-r-red-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm mb-1">فجوات حرجة</p>
              <h3 className="text-3xl font-bold text-slate-800">3</h3>
            </div>
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">تحتاج تدخل فوري في الخطة</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Market Trends Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <Briefcase className="text-blue-600" size={20} />
                تحليل الطلب في السوق
              </h3>
              <button className="text-sm text-blue-600 font-medium hover:underline self-end sm:self-auto">عرض التقرير الكامل</button>
            </div>
            
            <div className="space-y-4">
              {marketTrends.map((trend, idx) => (
                <div key={idx} className="flex flex-wrap sm:flex-nowrap items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors group">
                  <div className="flex items-center gap-4 mb-2 sm:mb-0 w-full sm:w-auto">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700 font-bold border group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{trend.skill}</h4>
                      <p className="text-xs text-slate-500">مطلوب في 150+ وظيفة جديدة</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-auto sm:block text-left pl-2 sm:pl-0">
                    <div className="flex items-center gap-1 text-green-600 font-bold sm:justify-end">
                      <TrendingUp size={16} />
                      {trend.growth}
                    </div>
                    <div className="sm:mt-1">
                      <Badge type={trend.demand === "متفجر" ? "danger" : "success"} text={trend.demand} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Action Center */}
          <Card className="bg-gradient-to-l from-slate-900 to-slate-800 text-white border-none shadow-xl">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  مقترحات الذكاء الاصطناعي
                </h3>
                <p className="text-slate-300 text-sm mb-4">بناءً على تحليل بيانات 5000 وظيفة تقنية، نقترح التعديلات التالية:</p>
              </div>
              <button 
                onClick={() => setShowAiSuggestion(!showAiSuggestion)}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
              >
                {showAiSuggestion ? 'إخفاء التفاصيل' : 'توليد خطة التحديث'}
              </button>
            </div>

            {showAiSuggestion && (
              <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 animate-in fade-in slide-in-from-top-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-blue-300 mb-1">اقتراح: هندسة الأوامر (Prompt Engineering)</h4>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">استبدال "مقدمة في تاريخ الحاسب" (3 ساعات) بمادة عملية حول التعامل مع النماذج اللغوية.</p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-xs font-medium transition-colors">اعتماد التغيير</button>
                      <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded text-xs transition-colors">مراجعة اللجنة</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Side Column - Alerts */}
        <div className="space-y-6">
          <Card>
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={20} />
              تنبيهات الفجوة
            </h3>
            <div className="space-y-3">
              {curriculumGaps.map((gap, idx) => (
                <div key={idx} className="p-3 border border-red-100 bg-red-50/30 rounded-lg transition-all hover:bg-red-50">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-slate-800">{gap.subject}</h4>
                    <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded">{gap.status}</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{gap.issue}</p>
                  <div className="flex items-center gap-2 text-xs text-blue-600 font-medium cursor-pointer hover:underline">
                    <ArrowUpRight size={14} />
                    {gap.suggestion}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminView;