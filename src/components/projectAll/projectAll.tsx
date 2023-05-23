import React, { useState } from 'react';
import styles from './projectAll.module.css';

const ProjectAll = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedcompetence, setSelectedcompetence] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlecompetenceChange = (competence) => {
        if (selectedcompetence.includes(competence)) {
            setSelectedcompetence(selectedcompetence.filter((s) => s !== competence));
        } else {
            setSelectedcompetence([...selectedcompetence, competence]);
        }
    };

    const filteredData = data.filter((post) => {
        const titleMatch = post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase());
        const descriptionMatch = post.frontmatter.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (selectedcompetence.length === 0) {
            return titleMatch || descriptionMatch;
        } else {
            return (
                (titleMatch || descriptionMatch) &&
                selectedcompetence.some((competence) => post.frontmatter.competence.includes(competence))
            );
        }
    });

    const sortedData = filteredData.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date);
        const dateB = new Date(b.frontmatter.date);
        return dateB - dateA; // Sort in descending order (most recent first)
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
            <div>
                <button
                    className={selectedcompetence.includes('Comprendre') ? 'btn btn-primary' : 'btn'}
                    onClick={() => handlecompetenceChange('Comprendre')}
                >
                    Comprendre
                </button>
                <button
                    className={selectedcompetence.includes('Développer') ? 'btn btn-primary' : 'btn'}
                    onClick={() => handlecompetenceChange('Développer')}
                >
                    Développer
                </button>
                <button
                    className={selectedcompetence.includes('Exprimer') ? 'btn btn-primary' : 'btn'}
                    onClick={() => handlecompetenceChange('Exprimer')}
                >
                    Exprimer
                </button>

                <button
                    className={selectedcompetence.includes('Concevoir') ? 'btn btn-primary' : 'btn'}
                    onClick={() => handlecompetenceChange('Concevoir')}
                >
                    Concevoir
                </button>
            </div>
            <section className="pl-[5vw] pr-[5vw] flex justify-center flex-col width-full">
                <div className={styles.projects_all}>
                    {sortedData.map((post) => (
                        <div className="p-7" key={post.id}>
                            <div className="card w-80 bg-base-100 shadow-xl">
                                <figure className="min-w-[100%] max-w-[100%] min-h-[200px] max-h-[200px]">
                                    <img
                                        src={`/img/heroImg/${post.frontmatter.heroImg}`}
                                        alt={`${post.frontmatter.description}`}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{post.frontmatter.title}</h2>
                                    <p className="text-justify overflow-hidden line-clamp-4">
                                        {post.frontmatter.description}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <a href={post.url} className="btn btn-primary">
                                            Voir plus
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectAll;
