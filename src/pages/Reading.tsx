import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Loader2 } from 'lucide-react';
import { generateReading } from '../services/geminiService';
import Markdown from 'react-markdown';

const categories = {
  'numerology': { name: 'Thần Số Học', fields: ['fullName', 'dob'] },
  'tuvi': { name: 'Tử Vi', fields: ['fullName', 'dob', 'tob', 'gender'] },
  'astrology': { name: 'Bản Đồ Sao', fields: ['dob', 'tob', 'pob'] },
  'tarot': { name: 'Tarot', fields: ['question'] },
  'playing-cards': { name: 'Bói Bài Tây', fields: ['question'] },
  'bazi': { name: 'Bát Tự', fields: ['dob', 'tob', 'gender'] },
  'oracle': { name: 'Oracle', fields: ['question'] },
  'human-design': { name: 'Human Design', fields: ['dob', 'tob', 'pob'] },
  'runes': { name: 'Cổ Ngữ Runes', fields: ['question'] },
};

export default function Reading() {
  const { type } = useParams<{ type: keyof typeof categories }>();
  const navigate = useNavigate();
  
  const category = type ? categories[type] : null;
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!category) {
    return <div className="text-center text-red-400 mt-20">Không tìm thấy phương pháp này.</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!type) return;
    
    setLoading(true);
    setError(null);
    try {
      const reading = await generateReading(type, formData);
      setResult(reading);
    } catch (err: any) {
      setError(err.message || 'Đã có lỗi xảy ra khi kết nối với vũ trụ. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: string) => {
    switch (field) {
      case 'fullName':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Họ và tên đầy đủ</label>
            <input 
              required type="text" name={field} onChange={handleInputChange}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              placeholder="Nguyễn Văn A"
            />
          </div>
        );
      case 'dob':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Ngày tháng năm sinh (Dương lịch)</label>
            <input 
              required type="date" name={field} onChange={handleInputChange}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>
        );
      case 'tob':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Giờ sinh</label>
            <input 
              required type="time" name={field} onChange={handleInputChange}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>
        );
      case 'pob':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Nơi sinh (Tỉnh/Thành phố)</label>
            <input 
              required type="text" name={field} onChange={handleInputChange}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              placeholder="Hà Nội"
            />
          </div>
        );
      case 'gender':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Giới tính</label>
            <select 
              required name={field} onChange={handleInputChange}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
        );
      case 'question':
        return (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300 uppercase tracking-wider">Câu hỏi hoặc vấn đề bạn đang quan tâm</label>
            <textarea 
              required name={field} onChange={handleInputChange} rows={4}
              className="w-full bg-mystic-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
              placeholder="Hãy tập trung vào câu hỏi của bạn..."
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium uppercase tracking-wider">Quay lại</span>
      </button>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-medium gold-text mb-4">
          {category.name}
        </h2>
        <p className="text-slate-400">
          Hãy điền thông tin bên dưới để nhận thông điệp vũ trụ cho năm 2026.
        </p>
      </div>

      {!result && !loading && (
        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 space-y-8">
          <div className="space-y-6">
            {category.fields.map(renderField)}
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-400 text-mystic-900 font-medium text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <Sparkles className="w-5 h-5" />
            Bắt đầu giải mã
          </button>
        </form>
      )}

      {loading && (
        <div className="glass-panel p-16 flex flex-col items-center justify-center space-y-6">
          <Loader2 className="w-12 h-12 text-gold-500 animate-spin" />
          <p className="text-gold-400 font-serif text-xl animate-pulse">Đang kết nối với vũ trụ...</p>
        </div>
      )}

      {error && (
        <div className="glass-panel p-8 border-red-500/30 text-center space-y-4">
          <p className="text-red-400">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="text-gold-500 hover:text-gold-400 underline text-sm"
          >
            Thử lại
          </button>
        </div>
      )}

      {result && !loading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 md:p-12 prose prose-invert prose-gold max-w-none"
        >
          <div className="markdown-body text-slate-300 leading-relaxed font-serif text-lg">
            <Markdown>{result}</Markdown>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <button 
              onClick={() => setResult(null)}
              className="text-gold-500 hover:text-gold-400 font-medium tracking-wider uppercase text-sm flex items-center justify-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Xem quẻ khác
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
