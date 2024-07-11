import { Card, Flex, ProgressCircle, Text } from "@tremor/react"

function Socialdw() {
    return(
        <div className="space-y-3 w-full">
            <Card className="flex flex-wrap justify-center gap-8  mx-auto">
                <ProgressCircle
                    value={72}
                    radius={25}
                    strokeWidth={6}
                    tooltip="radius: 25, strokeWidth: 6"
                /><ProgressCircle
                    value={72}
                    radius={25}
                    strokeWidth={6}
                    tooltip="radius: 25, strokeWidth: 6"
                />
                <ProgressCircle
                    value={72}
                    radius={50}
                    strokeWidth={8}
                    tooltip="radius: 50, strokeWidth: 8"
                />
                <ProgressCircle
                    value={72}
                    radius={40}
                    strokeWidth={10}
                    tooltip="radius: 40, strokeWidth: 10"
                />
                <ProgressCircle
                    value={72}
                    radius={16}
                    strokeWidth={4}
                    tooltip="radius: 16, strokeWidth: 4"
                />
                <ProgressCircle
                    value={72}
                    radius={45}
                    strokeWidth={5}
                    tooltip="radius: 45, strokeWidth: 5"
                /><ProgressCircle
                    value={72}
                    radius={40}
                    strokeWidth={5}
                    tooltip="radius: 45, strokeWidth: 5"
                />
            </Card>
        </div>
    )
}
export default  Socialdw