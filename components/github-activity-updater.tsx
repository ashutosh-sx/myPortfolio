"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

// This component would fetch the latest GitHub and LeetCode data
// In a real implementation, you would use GitHub API and LeetCode API or scraping
export default function GitHubActivityUpdater() {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Function to fetch latest GitHub and LeetCode data
  const fetchLatestData = async () => {
    setIsLoading(true)

    try {
      // In a real implementation, you would:
      // 1. Call GitHub API to get latest repos, contributions, etc.
      // 2. Call LeetCode API or scrape LeetCode profile for latest stats
      // 3. Update the data in your database or local storage

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Update last updated timestamp
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error fetching latest data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchLatestData()

    // Set up interval to fetch data periodically (e.g., once a day)
    const interval = setInterval(fetchLatestData, 24 * 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="border-gray-700 hover:border-sky-500 hover:text-sky-500"
              onClick={fetchLatestData}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              <span className="sr-only">Update GitHub & LeetCode Data</span>
            </Button>
            <div className="text-xs text-gray-400">
              {lastUpdated ? <>Last updated: {lastUpdated.toLocaleString()}</> : <>Updating data...</>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
