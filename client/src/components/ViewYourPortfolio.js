import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPortfolioById } from '../services/api';
// import '../App.css';
import './PortfolioDetails.css';

const PortfolioDetails = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const { data } = await fetchPortfolioById(id);
                setPortfolio(data);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
            }
        };

        getPortfolio();
    }, [id]);

    if (!portfolio) {
        return <div>Loading portfolio...</div>;
    }

    // Get the theme from portfolio data
    const themeClass = portfolio.theme ? portfolio.theme.toLowerCase() : 'default';

    return (
        <div className={`portfolio-details-container ${themeClass}`}>
            <h2>{portfolio.name}</h2>
            <p>Email: {portfolio.email}</p>
            <p>Phone: {portfolio.phone}</p>
            <p>Country: {portfolio.country}</p>
            <div className="portfolio-details-container">

    <div className="section about">
        <h3>About Me</h3>
        <p>{portfolio.aboutMe}</p>
    </div>

    {portfolio.skills?.length > 0 && (
        <div className="section skills">
            <h3>Skills</h3>
            <ul>
                {portfolio.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )}

    {portfolio.experience?.length > 0 && (
        <div className="section experience">
            <h3>Work Experience</h3>
            <ul>
                {portfolio.experience.map((job, index) => (
                    <li key={index}>
                        <strong>{job.position}</strong> at {job.company}
                        <p>{job.startDate} - {job.endDate}</p>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )}

    {portfolio.education?.length > 0 && (
        <div className="section education">
            <h3>Education</h3>
            <ul>
                {portfolio.education.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.degree}</strong> in {edu.fieldOfStudy}
                        <p>From: {edu.institution}</p>
                        <p>{edu.startDate} - {edu.endDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    )}

    {portfolio.projects?.length > 0 && (
        <div className="section projects">
            <h3>Projects</h3>
            <ul>
                {portfolio.projects.map((project, index) => (
                    <li key={index}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        {project.githubLink && (
                            <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )}

</div>

        </div>
    );
};

export default PortfolioDetails;
