const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Prepare Report",
        description: "Compile the monthly sales report.",
        date: "2025-07-08",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team sync.",
        date: "2025-07-09",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-Up",
        description: "Follow up with client on project status.",
        date: "2025-07-10",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        title: "Update Website",
        description: "Make content changes to the company website.",
        date: "2025-07-08",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixes",
        description: "Resolve reported bugs from QA team.",
        date: "2025-07-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review code submitted by peers.",
        date: "2025-07-10",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy Update",
        description: "Deploy latest version to production.",
        date: "2025-07-11",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        title: "Social Media Post",
        description: "Schedule new social media posts.",
        date: "2025-07-08",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Design Banner",
        description: "Create a banner for the summer campaign.",
        date: "2025-07-09",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Ad Campaign",
        description: "Launch new Google Ads campaign.",
        date: "2025-07-10",
        category: "Advertising",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer Survey",
        description: "Send out customer feedback survey.",
        date: "2025-07-11",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Market Analysis",
        description: "Analyze competitors’ marketing strategies.",
        date: "2025-07-12",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 3,
      new: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        title: "Inventory Check",
        description: "Audit current inventory levels.",
        date: "2025-07-08",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Supplier Call",
        description: "Call supplier to confirm delivery dates.",
        date: "2025-07-09",
        category: "Procurement",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Stock Order",
        description: "Place new stock order for warehouse.",
        date: "2025-07-10",
        category: "Procurement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Damaged Goods Report",
        description: "Report damaged goods from last shipment.",
        date: "2025-07-11",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Warehouse Visit",
        description: "Inspect warehouse for safety compliance.",
        date: "2025-07-12",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Vendor Evaluation",
        description: "Evaluate vendor performance for the quarter.",
        date: "2025-07-13",
        category: "Procurement",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 4,
      new: 3,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    name: "Ravi Patel",
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        title: "Draft Proposal",
        description: "Draft proposal for new project.",
        date: "2025-07-08",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Budget Review",
        description: "Review department budget for next quarter.",
        date: "2025-07-09",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Presentation",
        description: "Prepare slides for client presentation.",
        date: "2025-07-10",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Contract Signing",
        description: "Sign contract with new client.",
        date: "2025-07-11",
        category: "Legal",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Risk Assessment",
        description: "Complete risk assessment for upcoming project.",
        date: "2025-07-12",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Stakeholder Meeting",
        description: "Attend stakeholder alignment meeting.",
        date: "2025-07-13",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Project Handover",
        description: "Handover completed project to operations team.",
        date: "2025-07-14",
        category: "Delivery",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Resource Allocation",
        description: "Plan resource allocation for next month.",
        date: "2025-07-15",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 6,
      new: 4,
      completed: 1,
      failed: 1
    }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "1234"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
}

