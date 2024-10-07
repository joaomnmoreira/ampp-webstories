"use client";

import React, { useState, Fragment } from 'react';

interface StoryPlayerProps {
  url: string;
  title: string;
  poster: string;
  width?: number;
  height?: number;
}

const StoryPlayer: React.FC<StoryPlayerProps> = ({ url, title, poster, width = 360, height = 600 }) => {
  return (
    <amp-story-player
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <a
        href={url}
        style={{
          ['--story-player-poster' as any]: poster ? `url('${poster}')` : undefined,
        }}
      >
        {title}
      </a>
    </amp-story-player>
  );
};

const AmpStoryPlayer: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const title = 'Stories in AMP - Hello World';
  const url = 'https://preview.amp.dev/documentation/examples/introduction/stories_in_amp';
  const poster = 'https://amp.dev/static/samples/img/story_dog2_portrait.jpg';

  return (
    <Fragment>
      <h2 className="text-2xl font-bold mb-4">AMP Story Player Demo</h2>
      <button 
        onClick={() => setShowPlayer(!showPlayer)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Toggle Player
      </button>
      {showPlayer && (
        <StoryPlayer url={url} poster={poster} title={title} />
      )}
    </Fragment>
  );
};

export default AmpStoryPlayer;