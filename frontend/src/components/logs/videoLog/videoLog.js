import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './videoLog.css';

const videoData = [
  { id: 1, location: 'KJ SOMAIYA', area: 'Ghatkopar West', date: '24/05/2024', time: '9:40 PM', approxMen: 4 },
  { id: 2, location: 'Vidyavihar West', area: 'Ghatkopar West', date: '24/05/2024', time: '9:40 PM', approxMen: 4 },
  { id: 3, location: 'Kurla West', area: 'Ghatkopar West', date: '24/05/2024', time: '9:40 PM', approxMen: 4 },
  { id: 4, location: 'Mulund West', area: 'Ghatkopar West', date: '24/05/2024', time: '9:40 PM', approxMen: 4 },
];

const VideoCard = ({ video }) => (
  <div className="video-card">
    <div className="video-placeholder"></div>
    <div className='video-info'>
      <p className='location'>{video.location}</p>
      <p><strong>Area:</strong> {video.area}</p>
      <p><strong>Date:</strong> {video.date}</p>
      <p><strong>Time:</strong> {video.time}</p>
      <p><strong>Approx No. of Men:</strong> {video.approxMen}</p>
      <button className="more-info-btn">View More</button>
    </div>
  </div>
);

const VideoLogComponent = () => {
  const [filter, setFilter] = useState('');

  const filteredVideos = videoData.filter(video =>
    video.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="video-log-container">
      <h1 className="video-log-title">Logs:</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by location"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
        <Search className="search-icon" />
      </div>
      <div className="video-grid">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoLogComponent;