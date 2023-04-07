import React from 'react';
import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '../ui/button';

const EventItem = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = props.location.replace(', ', '\n');
  const exploreLink = `/events/${props.id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + props.image} alt={props.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{props.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
