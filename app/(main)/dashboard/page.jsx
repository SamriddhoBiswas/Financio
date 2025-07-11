import React from 'react'
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";

function DashboardPage() {
  return (
    <div>
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
    </div>
  )
}

export default DashboardPage;