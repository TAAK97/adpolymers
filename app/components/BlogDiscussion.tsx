'use client';

import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, UserCheck, Send, CheckCircle2 } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  role: string;
  company: string;
  date: string;
  content: string;
  verified: boolean;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Ramanathan K.',
    role: 'Sr. Quality Engineer',
    company: 'Tier-1 Auto Supplier',
    date: '2 Days ago',
    content: 'We noticed a slight variance in cycle time when running 30% GF PA66 during monsoon humidity shifts. Did increasing mould temperature to 90°C assist in stabilizing weld-line strength without increasing cycle time beyond 28 seconds?',
    verified: true,
  },
  {
    id: '2',
    author: 'AD Polymers Engineering Team',
    role: 'Process Specialist',
    company: 'AD Polymers',
    date: '1 Day ago',
    content: 'Hi Ramanathan, yes—proper desiccant drying of PA66 down to <0.02% moisture before processing is critical. Maintaining 90°C mould temperature improves surface finish and weld line entanglement without penalty if multi-stage holding pressure is tuned correctly.',
    verified: true,
  },
];

export default function BlogDiscussion({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !content) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      role: role || 'Manufacturing Engineer',
      company: company || 'OEM Partner',
      date: 'Just now',
      content,
      verified: false,
    };

    setComments([newComment, ...comments]);
    setContent('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    
      
        
          
            
          
          
            Technical Peer Discussions
            
              Verified Q&A for process engineers, quality leads, and tooling technicians.
            
          
        
        
          {comments.length} Engineering Threads
        
      

      {/* Form to submit technical question */}
      
        
           Post a Processing Question or Field Observation
        

        
           setAuthor(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
           setRole(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
           setCompany(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
        

         setContent(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 mb-4"
        />

        <div className="flex items-center justify-between">
          <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" /> Moderated technical review. No spam allowed.
          </p>

          <button
            type="submit"
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs rounded-lg transition flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" /> Submit Inquiry
          </button>
        </div>

        {submitted && (
          <div className="mt-3 text-xs font-mono text-cyan-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Inquiry published to engineering board.
          </div>
        )}
      </form>

      {/* Comment Stream */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{c.author}</span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">
                  {c.role} {c.company ? `@ ${c.company}` : ''}
                </span>
                {c.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" /> Verified Partner
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono text-slate-500">{c.date}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{c.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}