import React from 'react'
import MarkdownContent from '../MarkdownContent';
import './index.scss'

export const TimelineEvent = ({title, sub, url, project, date, children}) => {
  const formatDate = (date) => {
    if (typeof(date)==='string'){
      return date
    }else{
      return <p>{date[0]} <br /> {date[1]}</p>
      }
  }
    return (
        <div>
          <div className="timeline_line"></div>
          <div className="timeline_event">
          <div className="timeline_event-date">{formatDate(date)}</div>
            <div className="timeline_event-icon"></div>
            <div className="timeline_event-content">
            <h4>{
              project?<a href={project}><span>{title}</span></a>:<span>{title}</span>

            }</h4>

            <p className="timeline_event-content-url">{
              url?<a href={url}><span>{sub}</span></a>:<span>{sub}</span>

            }</p>
              <MarkdownContent content={children} />
            </div>
          </div>
        </div>
    );
}
export const Timeline = ({children}) => {
    return (
      <section className="timeline_section">
        {children}
      </section>
    );
}
