
[
    {
        "text": "查询条件",
        "children": [
            {
                "field": "datebegin",
                "help": null,
                "text": "开始时间",
                "type": "date",
                "defaultValue": null,
                "select": null,
                "page": "renewDivideReport",
                "category": "查询条件",
                "options": []
            }
        ]
    },
    {
        "text": "汇总维度",
        "children": [
            {
                "field": "period",
                "help": null,
                "text": "时间维度",
                "type": "select",
                "defaultValue": null,
                "select": "reportTimeGroupBy",
                "page": "renewDivideReport",
                "category": "汇总维度",
                "options": []
            }
        ]
    },
    {
        "text": "筛选项",
        "children": [
            {
                "field": "bu",
                "help": null,
                "text": "BU",
                "type": "select-multiple",
                "defaultValue": null,
                "select": "bu",
                "page": "renewDivideReport",
                "category": "筛选项",
                "options": []
            }
        ]
    },
    {
        "text": "",
        "children": [
            {
                "field": "yyuser",
                "help": null,
                "text": "运营人员",
                "type": "yyuser-cascader",
                "defaultValue": null,
                "select": "yyuser3",
                "page": "renewDivideReport",
                "category": "",
                "options": []
            },
            {
                "field": "isAssignedOnly",
                "help": null,
                "text": "分配状态",
                "type": "select",
                "defaultValue": null,
                "select": null,
                "page": "renewDivideReport",
                "category": "",
                "options": [
                    {
                        "value": "0",
                        "text": "全部"
                    },
                    {
                        "value": "1",
                        "text": "已分配"
                    }
                ]
            }
        ]
    }
]