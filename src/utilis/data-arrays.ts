export const value = {
    total: 1200,
    deleted: 150,
    archived: 200,
    published: 700,
    unpublished: 150,
  };

  export const number = {
    total: 1,
    deleted: 15,
    archived: 20,
    published: 10,
    unpublished: 15,
  }

  export const data = [
    { category: "HR", documents: 12, quarter: "Q1" },
    { category: "Finance", documents: 18, quarter: "Q1" },
    { category: "HNB", documents: 9, quarter: "Q1" },
    { category: "WACS", documents: 15, quarter: "Q1" },
    { category: "IDEC", documents: 23, quarter: "Q1" },
    { category: "POSSAP", documents: 14, quarter: "Q1" },
    { category: "IDEC", documents: 23, quarter: "Q1" },
    { category: "POSSAP", documents: 14, quarter: "Q1" },
    { category: "NMBS", documents: 10, quarter: "Q1" },
    { category: "HR", documents: 12, quarter: "Q2" },
    { category: "Finance", documents: 18, quarter: "Q2" },
    { category: "HNB", documents: 19, quarter: "Q2" },
    { category: "WACS", documents: 45, quarter: "Q2" },
    { category: "IDEC", documents: 13, quarter: "Q2" },
    { category: "POSSAP", documents: 14, quarter: "Q2" },
    { category: "IDEC", documents: 33, quarter: "Q2" },
    { category: "POSSAP", documents: 24, quarter: "Q2" },
    { category: "NMBS", documents: 40, quarter: "Q2" },
  ];

  export const lineChartData = [
    { period: "Jan", documents: 12, quarter: "Q1" },
    { period: "Feb", documents: 18, quarter: "Q1" },
    { period: "Mar", documents: 24, quarter: "Q1" },
    { period: "Apr", documents: 30, quarter: "Q2" },
    { period: "May", documents: 22, quarter: "Q2" },
    { period: "Jun", documents: 28, quarter: "Q2" },
    { period: "Jul", documents: 35, quarter: "Q3" },
    { period: "Aug", documents: 25, quarter: "Q3" },
    { period: "Sep", documents: 33, quarter: "Q3" },
    { period: "Oct", documents: 20, quarter: "Q4" },
    { period: "Nov", documents: 27, quarter: "Q4" },
    { period: "Dec", documents: 19, quarter: "Q4" },
  ];
  

  export const documents = [
    {
      name: "Employee Handbook",
      createdAt: "2025-04-15",
      status: "Uploaded",
      owner: "HR Dept",
      type: "Word Document",
      lastModified: "2025-05-01",
      document: "",
    },
    {
      name: "Budget Report Q1",
      createdAt: "2025-04-20",
      status: "Processing",
      owner: "Finance",
      type: "Word Document",
      lastModified: "2025-05-01",
    },
    {
      name: "Marketing Plan",
      createdAt: "2025-04-10",
      status: "Uploaded",
      owner: "Marketing",
      type: "Excel Spreadsheet",
      lastModified: "2025-05-01",
      document:
        "https://docs.google.com/spreadsheets/d/1AeqcjTf5yg_H7FiW4xsnMk5yjAXv7C7uehJFFMUP5zM/edit?gid=379996985#gid=379996985",
    },
    {
      name: "Legal Agreement",
      createdAt: "2025-03-28",
      status: "deleted",
      owner: "Legal Team",
      type: "Excel Spreadsheet",
      lastModified: "2025-05-01",
    },
    {
      name: "Employee Handbook",
      createdAt: "2025-04-15",
      status: "Uploaded",
      owner: "HR Dept",
      type: "Excel Spreadsheet",
      lastModified: "2025-05-01",
    },
    {
      name: "Budget Report Q1",
      createdAt: "2025-04-20",
      status: "Processing",
      owner: "Finance",
      type: "PDF",
      lastModified: "2025-05-01",
    },
    {
      name: "Marketing Plan",
      createdAt: "2025-04-10",
      status: "Uploaded",
      owner: "Marketing",
      type: "Word Document",
      lastModified: "2025-05-01",
    },
    {
      name: "Legal Agreement",
      createdAt: "2025-03-28",
      status: "deleted",
      owner: "Legal Team",
      type: "PDF",
      lastModified: "2025-05-01",
    },
    {
      name: "Employee Handbook",
      createdAt: "2025-04-15",
      status: "Uploaded",
      owner: "HR Dept",
      type: "Excel Spreadsheet",
      lastModified: "2025-05-01",
    },
    {
      name: "Budget Report Q1",
      createdAt: "2025-04-20",
      status: "Processing",
      owner: "Finance",
      type: "Word Document",
      lastModified: "2025-05-01",
    },
  ];



  export const dummyDocuments = [
    {
      id: 1,
      name: "Employee Handbook",
      type: "PDF",
      uploadedBy: "Jane Doe",
      dateUploaded: "2025-05-01",
      status: "Approved",
      lastModified: "2025-05-01"
    },
    {
      id: 2,
      name: "Project Plan Q2",
      type: "Word Document",
      uploadedBy: "John Smith",
      dateUploaded: "2025-05-05",
      status: "Draft",
      lastModified: "2025-05-01"
    },
    {
      id: 3,
      name: "Budget 2025",
      type: "Excel Spreadsheet",
      uploadedBy: "Aliyu Musa",
      dateUploaded: "2025-04-28",
      status: "Pending",
      lastModified: "2025-05-01"
    },
    {
      id: 4,
      name: "Onboarding Checklist",
      type: "PDF",
      uploadedBy: "Ngozi Umeh",
      dateUploaded: "2025-05-10",
      status: "Approved",
      lastModified: "2025-05-01"
    },
    {
      id: 5,
      name: "Project Plan Q2",
      type: "Word Document",
      uploadedBy: "John Smith",
      dateUploaded: "2025-05-05",
      status: "Draft",
      lastModified: "2025-05-01"
    },
    {
      id: 6,
      name: "Budget 2025",
      type: "Excel Spreadsheet",
      uploadedBy: "Aliyu Musa",
      dateUploaded: "2025-04-28",
      status: "Pending",
      lastModified: "2025-05-01"
    },
    {
      id: 7,
      name: "Onboarding Checklist",
      type: "PDF",
      uploadedBy: "Ngozi Umeh",
      dateUploaded: "2025-05-10",
      status: "Approved",
      lastModified: "2025-05-01"
    }
  ];
  

  export const dummyFiles = [
    {
      id: 1,
      name: "Employee Handbook",
      type: "PDF",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "View",
    },
    {
      id: 2,
      name: "Employee Handbook",
      type: "Word Document",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "Edit",
    },
    {
      id: 3,
      name: "Employee Handbook",
      type: "PDF",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "Read-only",
    },
    {
      id: 4,
      name: "Employee Handbook",
      type: "Excel Spreadsheet",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "View",
    },
    {
      id: 5,
      name: "Employee Handbook",
      type: "PDF",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "Read-only",
    },
    {
      id: 6,
      name: "Employee Handbook",
      type: "PDF",
      owner: "Jane Doe",
      dateShared: "2025-05-01",
      access: "Edit",
    },
  ];

export const optionsOne = [
  { value: "", label: "All Types" },
  { value: "PDF", label: "PDF" },
  { value: "Word Document", label: "Word" },
  { value: "Excel Spreadsheet", label: "Excel" },
];

export const optionsTwo = [
  { value: "", label: "All Access" },
  { value: "View", label: "View" },
  { value: "Edit", label: "Edit" },
  { value: "Read-only", label: "Read-only" },
];

export const optionsThree = [
  { value: "", label: "Date Shared" },
  { value: "desc", label: "Newest" },
  { value: "asc", label: "Oldest" },
];


export const people = [
  { name: "Andra Wijaya", role: "Owner", you: true },
  { name: "Riko Santosa", role: "Can edit" },
  { name: "Nadia Prameswari", role: "Can view" },
  { name: "Intan Maharani", role: "Can view" },
  { name: "Bagas Permana", role: "Can view" },
];

export const folderColors = [
  "#3f1ad3",
  "#e11313",
  "#14ec14",
  "#ac0e87",
  "#0ea5e9",
  "#f97316", 
  "#a855f7",
];
