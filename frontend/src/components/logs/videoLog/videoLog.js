import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import './videoLog.css';

const videoData = [
  { id: 1, location: 'KJ Somaiya College of Engineering', area: 'Vidyavihar West', approxMen: 6 },
  { id: 2, location: 'Senroofs', area: 'Mulund East', approxMen: 1 },
  { id: 3, location: 'St. Xaviers High School', area: 'Thane West', approxMen: 5 },
  { id: 4, location: 'Pheonix Paragon Plaza', area: 'Kurla West', approxMen: 2 },
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
  const [videos, setVideos] = useState(videoData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedVideos = videos.map(video => ({
        ...video,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      }));
      setVideos(updatedVideos);
    }, 1000);

    return () => clearInterval(interval);
  }, [videos]);

  const filteredVideos = videos.filter(video =>
    Object.values(video).some(value =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="video-log-container">
      <h1 className="video-log-title">Logs:</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by any field"
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
