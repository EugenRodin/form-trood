import React from 'react'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src="../src/assets/images/logo.png" alt="Logo" />
                </div>
                <div className="sidebar-menu">
                    <div className="menu-item active">
                        <img src="../src/assets/images/insert_chart.png" alt="Dashboard Icon" className="menu-icon__dashboard" />
                        <span>Dashboard</span>
                    </div>
                    <div className="menu-item">
                        <img src="../src/assets/images/domain.png" alt="Business Icon" className="menu-icon" />
                        <span>Business</span>
                    </div>
                    <div className="menu-item">
                        <img src="../src/assets/images/qr_code.png" alt="Product Icon" className="menu-icon" />
                        <span>Product</span>
                    </div>
                </div>
            </div>
            <div className="dashboard">
                <div className="dropdown">
                    <div className="dropdown-header">
                        <div className="dropdown-title">All projects</div>
                        <div className="dropdown-arrow">▼</div>
                    </div>
                    <div className="calendar-icon">
                        <a href="/"><img src="../src/assets/images/storefront.png" alt="calendar" /></a>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="suggestion">
                        <h2>Suggestion</h2>
                        <div className="dshboard-content-ablock">
                            <div className="dashboard-create">
                                <div className="dashboard-title">Add your project</div>
                                <div className="dashboard-p">personal</div>
                            </div>
                            <div className="structure-create">
                                <div className="structure-title">Add product structure</div>
                                <div className="structure-p">personal</div>
                            </div>
                        </div>
                    </div>
                    <div className="tasks-section">
                        <h2>Tasks</h2>
                        <div className="dshboard-content-ablock">
                            <div className="task-add">
                                <div className="task-title">Add Task</div>
                                <div className="task-p">Click to add a new task</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard