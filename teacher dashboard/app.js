// Teacher Dashboard Application JavaScript

// Application data
const appData = {
    teacher: {
        name: "Gurpreet Kaur",
        subject: "Mathematics & Science",
        classes: ["10th A", "10th B", "9th A"],
        total_students: 87,
        assignments_pending: 12,
        grades_pending: 25
    },
    classes: [
        {
            id: 1,
            name: "10th A",
            subject: "Mathematics",
            students: 32,
            schedule: "Mon, Wed, Fri - 9:00 AM",
            attendance_today: 28,
            avg_performance: 78
        },
        {
            id: 2,
            name: "10th B", 
            subject: "Mathematics",
            students: 30,
            schedule: "Tue, Thu, Sat - 10:00 AM",
            attendance_today: 27,
            avg_performance: 82
        },
        {
            id: 3,
            name: "9th A",
            subject: "Science",
            students: 25,
            schedule: "Mon, Wed, Fri - 11:00 AM",
            attendance_today: 23,
            avg_performance: 75
        }
    ],
    students: [
        {
            id: 1,
            name: "Arjun Singh",
            class: "10th A",
            roll_number: "2024001",
            attendance: 92,
            avg_grade: 78,
            recent_scores: [85, 78, 82, 75, 88],
            parent_contact: "+91 9876543210",
            learning_style: "Visual"
        },
        {
            id: 2,
            name: "Simran Kaur",
            class: "10th A",
            roll_number: "2024002",
            attendance: 96,
            avg_grade: 92,
            recent_scores: [95, 89, 94, 88, 96],
            parent_contact: "+91 9876543211",
            learning_style: "Auditory"
        },
        {
            id: 3,
            name: "Preet Singh",
            class: "10th B",
            roll_number: "2024003",
            attendance: 88,
            avg_grade: 81,
            recent_scores: [82, 79, 85, 78, 84],
            parent_contact: "+91 9876543212",
            learning_style: "Kinesthetic"
        }
    ],
    languages: {
        en: {
            dashboard: "Dashboard",
            classes: "Classes",
            students: "Students",
            assignments: "Assignments",
            gradebook: "Gradebook",
            resources: "Resources",
            announcements: "Announcements",
            analytics: "Analytics",
            welcome: "Welcome back!",
            total_students: "Total Students",
            pending_assignments: "Pending Assignments",
            grades_pending: "Grades to Review",
            avg_performance: "Avg Performance",
            quick_actions: "Quick Actions",
            create_assignment: "Create Assignment",
            record_attendance: "Record Attendance",
            send_announcement: "Send Announcement",
            grade_assignments: "Grade Assignments",
            recent_activities: "Recent Activities"
        },
        hi: {
            dashboard: "डैशबोर्ड",
            classes: "कक्षाएं",
            students: "छात्र",
            assignments: "असाइनमेंट",
            gradebook: "ग्रेड बुक",
            resources: "संसाधन",
            announcements: "घोषणाएं",
            analytics: "विश्लेषण",
            welcome: "वापस स्वागत है!",
            total_students: "कुल छात्र",
            pending_assignments: "लंबित असाइनमेंट",
            grades_pending: "समीक्षा के लिए ग्रेड",
            avg_performance: "औसत प्रदर्शन",
            quick_actions: "त्वरित कार्य",
            create_assignment: "असाइनमेंट बनाएं",
            record_attendance: "उपस्थिति दर्ज करें",
            send_announcement: "घोषणा भेजें",
            grade_assignments: "असाइनमेंट ग्रेड करें",
            recent_activities: "हाल की गतिविधियां"
        },
        pa: {
            dashboard: "ਡੈਸ਼ਬੋਰਡ",
            classes: "ਕਲਾਸਾਂ",
            students: "ਵਿਦਿਆਰਥੀ",
            assignments: "ਅਸਾਈਨਮੈਂਟ",
            gradebook: "ਗ੍ਰੇਡ ਬੁੱਕ",
            resources: "ਸਰੋਤ",
            announcements: "ਘੋਸ਼ਣਾਵਾਂ",
            analytics: "ਵਿਸ਼ਲੇਸ਼ਣ",
            welcome: "ਮੁੜ ਸੁਆਗਤ ਹੈ!",
            total_students: "ਕੁੱਲ ਵਿਦਿਆਰਥੀ",
            pending_assignments: "ਲੰਬਿਤ ਅਸਾਈਨਮੈਂਟ",
            grades_pending: "ਸਮੀਖਿਆ ਲਈ ਗ੍ਰੇਡ",
            avg_performance: "ਔਸਤ ਪ੍ਰਦਰਸ਼ਨ",
            quick_actions: "ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ",
            create_assignment: "ਅਸਾਈਨਮੈਂਟ ਬਣਾਓ",
            record_attendance: "ਹਾਜ਼ਰੀ ਦਰਜ ਕਰੋ",
            send_announcement: "ਘੋਸ਼ਣਾ ਭੇਜੋ",
            grade_assignments: "ਅਸਾਈਨਮੈਂਟ ਗ੍ਰੇਡ ਕਰੋ",
            recent_activities: "ਹਾਲ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ"
        }
    }
};

let currentLanguage = 'en';
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeLanguageSelector();
    initializeCharts();
    initializeSearchAndFilters();
    showNotification('Welcome to your Teacher Dashboard!', 'success');
    
    // Ensure dashboard is visible on load
    showDashboard();
});

// Navigation functionality - Fixed navigation state issue
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav item
            navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            const targetElement = document.getElementById(targetSection + '-section');
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
}

// Helper function to show dashboard
function showDashboard() {
    const dashboardSection = document.getElementById('dashboard-section');
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
    // Show dashboard
    if (dashboardSection) {
        dashboardSection.classList.add('active');
    }
    
    // Update nav state
    navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
    const dashboardNav = document.querySelector('[data-section="dashboard"]');
    if (dashboardNav) {
        dashboardNav.parentElement.classList.add('active');
    }
}

// Language functionality - Enhanced with more translations
function initializeLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (appData.languages[currentLanguage] && appData.languages[currentLanguage][key]) {
            element.textContent = appData.languages[currentLanguage][key];
        }
    });

    // Update welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        const welcomeText = appData.languages[currentLanguage].welcome;
        welcomeMessage.textContent = `${welcomeText} ${appData.teacher.name}!`;
    }

    // Update app title
    const appTitle = document.getElementById('app-title');
    if (appTitle) {
        appTitle.textContent = `${appData.languages[currentLanguage].dashboard} - Digital Learning Platform`;
    }

    // Update Quick Actions section - Fix for localization bug
    updateQuickActionsText();
    
    // Update Recent Activities section
    updateRecentActivitiesText();
}

function updateQuickActionsText() {
    const quickActionsTitle = document.querySelector('.quick-actions h3');
    if (quickActionsTitle && appData.languages[currentLanguage].quick_actions) {
        quickActionsTitle.textContent = appData.languages[currentLanguage].quick_actions;
    }
    
    // Update quick action buttons
    const actionButtons = document.querySelectorAll('.action-buttons .btn');
    const buttonKeys = ['create_assignment', 'record_attendance', 'send_announcement', 'grade_assignments'];
    
    actionButtons.forEach((button, index) => {
        if (buttonKeys[index] && appData.languages[currentLanguage][buttonKeys[index]]) {
            const icon = button.querySelector('i');
            const iconHTML = icon ? icon.outerHTML + ' ' : '';
            button.innerHTML = iconHTML + appData.languages[currentLanguage][buttonKeys[index]];
        }
    });
}

function updateRecentActivitiesText() {
    const recentActivitiesTitle = document.querySelector('.recent-activities h3');
    if (recentActivitiesTitle && appData.languages[currentLanguage].recent_activities) {
        recentActivitiesTitle.textContent = appData.languages[currentLanguage].recent_activities;
    }
}

// Chart initialization
function initializeCharts() {
    initializePerformanceChart();
    initializeAnalyticsCharts();
}

function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (ctx) {
        charts.performance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['10th A', '10th B', '9th A'],
                datasets: [{
                    label: 'Average Performance (%)',
                    data: [78, 82, 75],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

function initializeAnalyticsCharts() {
    // Performance Trend Chart
    const trendCtx = document.getElementById('performanceTrendChart');
    if (trendCtx) {
        charts.trend = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: '10th A',
                    data: [75, 78, 80, 78],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                }, {
                    label: '10th B',
                    data: [80, 82, 85, 82],
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4
                }, {
                    label: '9th A',
                    data: [70, 73, 75, 75],
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Completion Rate Chart
    const completionCtx = document.getElementById('completionChart');
    if (completionCtx) {
        charts.completion = new Chart(completionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Pending', 'Overdue'],
                datasets: [{
                    data: [75, 20, 5],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart');
    if (attendanceCtx) {
        charts.attendance = new Chart(attendanceCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: 'Attendance Rate (%)',
                    data: [92, 88, 95, 87, 93, 85],
                    backgroundColor: '#ECEBD5'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Subject Performance Chart
    const subjectCtx = document.getElementById('subjectChart');
    if (subjectCtx) {
        charts.subject = new Chart(subjectCtx, {
            type: 'radar',
            data: {
                labels: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
                datasets: [{
                    label: 'Average Score',
                    data: [80, 75, 85, 78, 82],
                    borderColor: '#5D878F',
                    backgroundColor: 'rgba(93, 135, 143, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Search and filter functionality
function initializeSearchAndFilters() {
    const studentSearch = document.getElementById('student-search');
    const classFilter = document.getElementById('class-filter');

    if (studentSearch) {
        studentSearch.addEventListener('input', filterStudents);
    }
    
    if (classFilter) {
        classFilter.addEventListener('change', filterStudents);
    }
}

function filterStudents() {
    const searchTerm = document.getElementById('student-search').value.toLowerCase();
    const classFilter = document.getElementById('class-filter').value;
    const tbody = document.getElementById('students-tbody');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const name = row.querySelector('.student-info span').textContent.toLowerCase();
        const studentClass = row.cells[1].textContent;
        
        const matchesSearch = name.includes(searchTerm);
        const matchesClass = !classFilter || studentClass === classFilter;
        
        row.style.display = matchesSearch && matchesClass ? '' : 'none';
    });
}

// Quick action functions
function createAssignment() {
    showCreateAssignmentModal();
}

function recordAttendance() {
    showNotification('Attendance recording feature activated!', 'info');
    // In a real app, this would open an attendance interface
}

function sendAnnouncement() {
    showCreateAnnouncementModal();
}

function gradeAssignments() {
    // Navigate to gradebook section
    document.querySelector('[data-section="gradebook"]').click();
    showNotification('Navigate to gradebook to grade assignments', 'info');
}

// Modal functions
function showCreateAssignmentModal() {
    document.getElementById('create-assignment-modal').classList.remove('hidden');
}

function hideCreateAssignmentModal() {
    document.getElementById('create-assignment-modal').classList.add('hidden');
}

function showCreateAnnouncementModal() {
    document.getElementById('create-announcement-modal').classList.remove('hidden');
}

function hideCreateAnnouncementModal() {
    document.getElementById('create-announcement-modal').classList.add('hidden');
}

function createNewAssignment() {
    const form = document.getElementById('assignment-form');
    const formData = new FormData(form);
    
    // Simulate assignment creation
    showNotification('Assignment created successfully!', 'success');
    hideCreateAssignmentModal();
    form.reset();
}

function createNewAnnouncement() {
    const form = document.getElementById('announcement-form');
    const formData = new FormData(form);
    
    // Simulate announcement creation
    showNotification('Announcement sent successfully!', 'success');
    hideCreateAnnouncementModal();
    form.reset();
}

// Class management functions
function createClass() {
    showNotification('Create new class feature would open here', 'info');
}

function viewClass(classId) {
    showNotification(`Viewing details for class ${classId}`, 'info');
}

function takeAttendance(classId) {
    showNotification(`Taking attendance for class ${classId}`, 'info');
}

// Student management functions
function viewStudent(studentId) {
    const student = appData.students.find(s => s.id === studentId);
    if (student) {
        showNotification(`Viewing profile for ${student.name}`, 'info');
    }
}

// Assignment functions
function gradeAssignment(assignmentId) {
    showNotification(`Grading assignment ${assignmentId}`, 'info');
}

function viewSubmissions(assignmentId) {
    showNotification(`Viewing submissions for assignment ${assignmentId}`, 'info');
}

// Gradebook functions
function saveGrades() {
    const gradeInputs = document.querySelectorAll('.grade-input');
    let hasChanges = false;
    
    gradeInputs.forEach(input => {
        if (input.value !== input.defaultValue) {
            hasChanges = true;
        }
    });
    
    if (hasChanges) {
        showNotification('Grades saved successfully!', 'success');
        // Update grade letters based on numeric grades
        updateGradeLetters();
    } else {
        showNotification('No changes to save', 'info');
    }
}

function updateGradeLetters() {
    const rows = document.querySelectorAll('.gradebook-table tbody tr');
    rows.forEach(row => {
        const gradeInputs = row.querySelectorAll('.grade-input');
        let total = 0;
        let count = 0;
        
        gradeInputs.forEach(input => {
            if (input.value) {
                total += parseFloat(input.value);
                count++;
            }
        });
        
        const average = count > 0 ? total / count : 0;
        const avgCell = row.querySelector('td:nth-last-child(2)');
        const gradeCell = row.querySelector('.grade-letter');
        
        avgCell.textContent = Math.round(average);
        
        let gradeLetter = 'F';
        if (average >= 90) gradeLetter = 'A';
        else if (average >= 80) gradeLetter = 'B';
        else if (average >= 70) gradeLetter = 'C';
        else if (average >= 60) gradeLetter = 'D';
        
        gradeCell.textContent = gradeLetter;
    });
}

// Resource functions
function uploadResource() {
    showNotification('Resource upload feature would open here', 'info');
}

function shareResource(resourceId) {
    showNotification(`Sharing resource ${resourceId}`, 'info');
}

function downloadResource(resourceId) {
    showNotification(`Downloading resource ${resourceId}`, 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="closeNotification(this)">&times;</button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation: slideIn 0.3s ease-out;
        background: ${getNotificationColor(type)};
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification.querySelector('.notification-close'));
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#1FB8CD',
        error: '#B4413C',
        warning: '#FFC185',
        info: '#5D878F'
    };
    return colors[type] || '#5D878F';
}

function closeNotification(button) {
    const notification = button.parentNode;
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
}

.notification-close:hover {
    opacity: 0.8;
}
`;
document.head.appendChild(style);

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// Handle escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const visibleModal = document.querySelector('.modal:not(.hidden)');
        if (visibleModal) {
            visibleModal.classList.add('hidden');
        }
    }
});

// Simulate real-time updates
setInterval(() => {
    // Simulate receiving new activities
    const activities = [
        "New assignment submitted by Rajesh Kumar",
        "Parent meeting request from Priya Sharma",
        "Quiz completed by 9th A class",
        "Resource downloaded 15 times today"
    ];
    
    // Randomly show a notification every 30 seconds (for demo purposes)
    if (Math.random() < 0.1) { // 10% chance every 30 seconds
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        showNotification(randomActivity, 'info');
    }
}, 30000);

// Grade input auto-calculation
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('grade-input')) {
        // Auto-update average when grades are changed
        updateGradeLetters();
    }
});

// Export data functionality (for offline use)
function exportData() {
    const data = {
        timestamp: new Date().toISOString(),
        classes: appData.classes,
        students: appData.students,
        teacher: appData.teacher
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'teacher-dashboard-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

// Add export button functionality (can be added to any section)
function addExportButton() {
    const exportBtn = document.createElement('button');
    exportBtn.className = 'btn btn--outline';
    exportBtn.innerHTML = '<i class="fas fa-download"></i> Export Data';
    exportBtn.onclick = exportData;
    return exportBtn;
}

// Initialize offline capabilities
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful');
    }).catch(function(err) {
        console.log('ServiceWorker registration failed');
    });
}

// Handle online/offline status
window.addEventListener('online', function() {
    showNotification('Connection restored! Syncing data...', 'success');
});

window.addEventListener('offline', function() {
    showNotification('You are offline. Some features may be limited.', 'warning');
});

console.log('Teacher Dashboard initialized successfully!');