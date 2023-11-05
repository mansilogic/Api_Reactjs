import React, { useEffect, useState } from 'react';
function Api() {
    const [data, setData] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        fetch('https://reyna.onrender.com/data')
            .then(response => response.json())
            .then(json => {
                setData(json.result.data.allContentstackAgentList.nodes[0].agent_list);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
   
    const handleTitleClick = (title) => {
        setSelectedTitle(title);
        setShowImage(true);
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: '#0074d9',
        color: 'white',
        padding: '10px',
        textAlign: 'left',
    };

    const tdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '24px', margin: '20px 0' }}>API Data in Table</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Title</th>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(agent => (
                        <tr key={agent.title}>
                            <td>
                                <button
                                    onClick={() => handleTitleClick(agent.title)}
                                    style={{
                                        backgroundColor: '#0074d9',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {agent.title}
                                </button>
                            </td>
                            <td style={tdStyle}>
                                {selectedTitle === agent.title && showImage && (
                                    <img src={agent.agent_image.url} alt={agent.title} style={{ maxWidth: '100%' }} />
                                )}
                            </td>
                            <td style={tdStyle}>{agent.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Api;
