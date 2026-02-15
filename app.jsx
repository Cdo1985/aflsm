// AFL Stats Matcher React App
// Main application component

const { useState } = React;
const { TrendingUp, Trophy, Target, Zap, Share2, X, MessageCircle } = lucide;

function AussieRulesStatsMatcher() {
  const [userStats, setUserStats] = useState({
    position: '',
    disposals: '',
    kicks: '',
    handballs: '',
    marks: '',
    tackles: '',
    goals: '',
    behinds: '',
    clearances: '',
    inside50s: '',
    contestedPossessions: '',
    uncontestedPossessions: '',
  });

  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const statLabels = {
    disposals: 'Disposals',
    kicks: 'Kicks',
    handballs: 'Handballs',
    marks: 'Marks',
    tackles: 'Tackles',
    goals: 'Goals',
    behinds: 'Behinds',
    clearances: 'Clearances',
    inside50s: 'Inside 50s',
    contestedPossessions: 'Contested Possessions',
    uncontestedPossessions: 'Uncontested Possessions',
  };

  const aflPositions = [
    'Full Forward',
    'Full Back',
    'Centre Half Forward',
    'Centre Half Back',
    'Right Half Forward',
    'Left Half Forward',
    'Right Half Back',
    'Left Half Back',
    'Right Forward Pocket',
    'Left Forward Pocket',
    'Right Back Pocket',
    'Left Back Pocket',
    'Ruck',
    'Ruck Rover',
    'Rover',
    'Right Wing',
    'Left Wing',
    'Centre',
  ];

  const handleInputChange = (stat, value) => {
    setUserStats(prev => ({ ...prev, [stat]: value }));
  };

  const findMatches = () => {
    const filledStats = Object.entries(userStats)
      .filter(([key, value]) => key !== 'position' && value !== '');
    if (filledStats.length < 3) {
      setError('Please enter at least 3 statistics to find matches');
      return;
    }

    setLoading(true);
    setError(null);
    setMatches(null);

    // Simulate processing delay for better UX
    setTimeout(() => {
      try {
        const results = window.findPlayerMatches(userStats);
        setMatches(results);
      } catch (err) {
        console.error('Error finding matches:', err);
        setError('Failed to find player matches. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  const resetStats = () => {
    setUserStats({
      position: '',
      disposals: '',
      kicks: '',
      handballs: '',
      marks: '',
      tackles: '',
      goals: '',
      behinds: '',
      clearances: '',
      inside50s: '',
      contestedPossessions: '',
      uncontestedPossessions: '',
    });
    setMatches(null);
    setError(null);
  };

  const generateShareText = () => {
    if (!matches) return '';
    const playerList = matches.map((p, i) => `${i + 1}. ${p.name} (${p.team}) - ${p.matchScore}%`).join('\n');
    return `🏈 My AFL playing style matches:\n\n${playerList}\n\nWho do you match with?`;
  };

  const shareNative = async () => {
    const text = generateShareText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AFL Stats Match',
          text: text,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
          copyToClipboard();
        }
      }
    } else {
      alert('Native sharing not supported on this device. Use the specific platform buttons below or copy to clipboard.');
    }
  };

  const shareToTwitter = () => {
    const text = generateShareText();
    const customSuffix = " — A Chris O'Malley Design #4rs3nls.";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + customSuffix)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToFacebook = () => {
    const text = generateShareText();
    const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToLinkedIn = () => {
    const text = generateShareText();
    const url = `https://www.linkedin.com/sharing/share-offsite/?summary=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToWhatsApp = () => {
    const text = generateShareText();
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareViaSMS = () => {
    const text = generateShareText();
    const url = `sms:?body=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  const copyToClipboard = async () => {
    const text = generateShareText();
    try {
      await navigator.clipboard.writeText(text);
      alert('Results copied to clipboard! 📋');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Results copied to clipboard! 📋');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 p-4 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap');
        
        :root {
          --primary: #D32F2F;
          --secondary: #FF6F00;
          --accent: #FFA000;
        }

        body {
          font-family: 'Rajdhani', sans-serif;
        }

        .scoreboard-title {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(211, 47, 47, 0.15);
        }

        .stat-input {
          font-family: 'Anton', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }

        .stat-input:focus {
          transform: scale(1.05);
          box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.2);
        }

        .match-card {
          animation: slideIn 0.5s ease-out backwards;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));
          backdrop-filter: blur(20px);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }

        .match-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .match-card:nth-child(1) { animation-delay: 0.1s; }
        .match-card:nth-child(2) { animation-delay: 0.2s; }
        .match-card:nth-child(3) { animation-delay: 0.3s; }
        .match-card:nth-child(4) { animation-delay: 0.4s; }
        .match-card:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .score-badge {
          font-family: 'Anton', sans-serif;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
        }

        .cta-button {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(211, 47, 47, 0.4);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(211, 47, 47, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(211, 47, 47, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-red-600" />
            <h1 className="scoreboard-title text-6xl md:text-8xl font-bold">
              AFL STATS MATCHER
            </h1>
            <Trophy className="w-12 h-12 text-orange-600" />
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Compare your performance with AFL professionals
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-red-600 text-white rounded-full text-sm font-bold tracking-wider">
            2024 SEASON STATS
          </div>
        </div>

        {/* Stats Input Grid */}
        <div className="grid-pattern rounded-3xl p-8 mb-8 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-red-600" />
            Your Statistics (Per Game Average)
          </h2>
          
          {/* Position Selector */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="stat-card rounded-xl p-6 border-2 border-red-400 bg-gradient-to-br from-red-50 to-orange-50">
              <label className="block text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide flex items-center gap-2">
                <Trophy className="w-6 h-6 text-red-600" />
                What Position Do You Play?
              </label>
              <select
                value={userStats.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className="w-full px-6 py-4 border-3 border-red-300 rounded-lg focus:outline-none focus:border-red-500 bg-white text-xl font-bold text-gray-800 cursor-pointer hover:border-red-400 transition-all"
              >
                <option value="">Select Your Position</option>
                {aflPositions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(statLabels).map(([key, label]) => (
              <div key={key} className="stat-card rounded-xl p-4 border-2 border-gray-200">
                <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  {label}
                </label>
                <input
                  type="number"
                  value={userStats[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="stat-input w-full px-4 py-3 border-3 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-white"
                  placeholder="0"
                  min="0"
                  step="0.1"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <button
              onClick={findMatches}
              disabled={loading}
              className="cta-button px-10 py-4 text-white rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  ANALYZING...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  FIND MY MATCHES
                </span>
              )}
            </button>
            
            <button
              onClick={resetStats}
              className="px-10 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl transition-all font-['Bebas_Neue'] tracking-wider"
            >
              RESET
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border-2 border-red-400 rounded-xl text-red-800 text-center font-semibold">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        {matches && (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                <TrendingUp className="w-10 h-10 text-red-600" />
                Your Top 5 AFL Player Matches
              </h2>
              <button
                onClick={() => setShowShareModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-['Bebas_Neue'] tracking-wider text-xl"
              >
                <Share2 className="w-5 h-5" />
                SHARE RESULTS
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {matches.map((player, index) => (
                <div key={index} className="match-card rounded-2xl p-6 shadow-xl relative">
                  <div className="absolute top-4 right-4">
                    <div className="score-badge text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {player.matchScore}% MATCH
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-['Bebas_Neue'] tracking-wide">
                      {player.name}
                    </div>
                    <div className="text-lg text-red-600 font-bold">
                      {player.team}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                      {player.position}
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                    <div className="text-sm font-bold text-gray-700 mb-2 uppercase">Key Stats</div>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(player.keyStats).map(([stat, value]) => (
                        <div key={stat} className="text-sm">
                          <span className="text-gray-600 capitalize">{stat.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="ml-1 font-bold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 leading-relaxed border-t-2 border-gray-200 pt-4">
                    {player.analysis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-scaleIn">
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <h3 className="text-3xl font-bold text-gray-900 mb-2 font-['Bebas_Neue'] tracking-wide">
                Share Your Results
              </h3>
              <p className="text-gray-600 mb-6 font-semibold">
                Show your friends which AFL pros you match!
              </p>

              <div className="space-y-3">
                <button
                  onClick={shareNative}
                  className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg"
                >
                  <Share2 className="w-6 h-6" />
                  Share (Use My Apps)
                </button>

                <div className="text-center text-sm text-gray-500 font-bold py-2">
                  OR CHOOSE A PLATFORM
                </div>

                <button
                  onClick={shareToTwitter}
                  className="w-full px-6 py-4 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter/X
                </button>

                <button
                  onClick={shareToFacebook}
                  className="w-full px-6 py-4 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>

                <button
                  onClick={shareToWhatsApp}
                  className="w-full px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </button>

                <button
                  onClick={copyToClipboard}
                  className="w-full px-6 py-4 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy to Clipboard
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                <p className="text-xs text-gray-600 font-semibold mb-2">PREVIEW:</p>
                <p className="text-sm text-gray-800 whitespace-pre-line font-medium">
                  {generateShareText()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p className="font-semibold">
            Based on 2024 AFL season statistics
          </p>
        </div>
      </div>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AussieRulesStatsMatcher />);
