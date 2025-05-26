"use client";

import { LineChart, TrendingDown, TrendingUp } from "lucide-react";
import {formatDistanceToNow, format} from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardView = ({insights}) => {

    const salaryData = insights.salaryRanges.map((range) => ({
        name: range.role,
        min: range.min/1000,
        max: range.max/1000,
        median: range.median/1000,
    }));

    const getDemandLevelColor = (level) => {
        console.log("Demand Level:", level);
        switch (level) {
            case 'HIGH':
                return 'bg-green-500';
            case 'MEDIUM':
                return 'bg-yellow-500';
            case 'LOW':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getMarketOutlookInfo = (outlook) => {
        console.log("Market Outlook:", outlook);
        
        switch (outlook) {
            case "POSITIVE":
                return {icon: TrendingUp, color: "text-green-500"};
            case "NEUTRAL":
                return {icon: LineChart, color: "text-yellow-500"};
            case "NEGATIVE":
                return {icon: TrendingDown, color: "text-red-500"};
            default:
                return {icon: LineChart, color: "text-gray-500"};
        }
    };

    const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
    const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

    const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
    const nextUpdateDistance = formatDistanceToNow(new Date(insights.nextUpdated), {
        addSuffix: true,
    });



  return (
    <div className="w-full p-4 space-y-4">
        <div className="flex justify-between items-center">
            <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2items-center justify-between">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                        Next Update {nextUpdateDistance}
                    </p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2items-center justify-between">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                        Next Update {nextUpdateDistance}
                    </p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2items-center justify-between">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                        Next Update {nextUpdateDistance}
                    </p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2items-center justify-between">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                        Next Update {nextUpdateDistance}
                    </p>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default DashboardView