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


            <div className='pl-[5vw] pr-[5vw] mt-12'>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value={searchTerm} onChange={handleSearchChange} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
                </div>
            </div>


            <div className="pl-[5vw] pr-[5vw] mt-4 flex flex-wrap gap-4 justify-center">
                <button
                    className={selectedcompetence.includes('Comprendre') ? 'btn mr-2 btn-primary' : 'btn mr-2'}
                    onClick={() => handlecompetenceChange('Comprendre')}
                >
                    Comprendre
                </button>
                <button
                    className={selectedcompetence.includes('Développer') ? 'btn btn-primary mr-2' : 'btn mr-2'}
                    onClick={() => handlecompetenceChange('Développer')}
                >
                    Développer
                </button>
                <button
                    className={selectedcompetence.includes('Exprimer') ? 'btn btn-primary mr-2' : 'btn mr-2'}
                    onClick={() => handlecompetenceChange('Exprimer')}
                >
                    Exprimer
                </button>

                <button
                    className={selectedcompetence.includes('Concevoir') ? 'btn btn-primary mr-2' : 'btn mr-2'}
                    onClick={() => handlecompetenceChange('Concevoir')}
                >
                    Concevoir
                </button>
            </div>
            <section className="pl-[5vw] pr-[5vw] flex justify-center flex-col width-full">
                <div className={styles.projects_all}>
                    {sortedData.map((post, key) => (
                        <div key={key} className="p-7" >
                            <div className="card w-80 md:w-[43rem] lg:w-80 bg-base-100 shadow-xl">
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
