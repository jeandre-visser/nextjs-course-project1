import React from 'react';
import Link from 'next/link';

const EventItem = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = props.location.replace(', ', '\n');
  const exploreLink = `/events/${props.id}`;

  return (
    <li>
      <img src={'/' + props.image} alt={props.title} />
      <div>
        <div>
          <h2>{props.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
