import React from 'react';
import { BookOpen, Plus } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

const StudentView: React.FC = () => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white mb-8 relative overflow-hidden shadow-lg shadow-blue-200">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">مرحباً، عمر 👋</h2>
          <p className="text-blue-100 mb-6 max-w-xl text-base sm:text-lg leading-relaxed">
            بناءً على هدفك الوظيفي "مهندس برمجيات Full Stack"، قمنا بتحليل السوق ووجدنا أنك تحتاج إلى المهارات التالية لزيادة فرص توظيفك بنسبة 40%.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default flex-1 sm:flex-none text-center sm:text-right">
              <span className="block text-xs text-blue-200 mb-1">الملاءمة للسوق</span>
              <span className="text-xl sm:text-2xl font-bold">72%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-default flex-1 sm:flex-none text-center sm:text-right">
              <span className="block text-xs text-blue-200 mb-1">الراتب المتوقع</span>
              <span className="text-xl sm:text-2xl font-bold" dir="ltr">12K - 15K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg sm:text-xl text-slate-800">المسار المقترح لردم الفجوة</h3>
        <button className="text-sm text-blue-600 hover:underline font-medium">عرض الكل</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-blue-50">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <BookOpen size={24} />
              </div>
              <Badge type="warning" text="مطلوب جداً" />
            </div>
            <h4 className="font-bold text-lg text-slate-800 mb-2">أساسيات Docker & Kubernetes</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              هذه المهارة مذكورة في 80% من الوظائف التي تناسب تخصصك ولكنها غير موجودة في خطتك الدراسية.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs text-slate-400 font-medium bg-gray-50 px-2 py-1 rounded">مدة: 5 ساعات</span>
              <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                إضافة للخطة
                <Plus size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentView;