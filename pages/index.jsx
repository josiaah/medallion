import Head from 'next/head'

export default function Home() {
return (
    <div className="flex flex-wrap items-center justify-center">
        <div className="container h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-bold leading-tight"><span className="text-blue-400">Medallion</span>.live</h1>
            <h2 className="text-center text-4xl text-gray-100 font-medium leading-tight">Watch, Share and Live Stream.</h2>
            <h2 className="text-gray-200 text-center text-3xl font-medium leading-tight">Coming to the Internet Soon!</h2> 
            <div className="flex flex-row space-x-3">
            <a href="https://discord.gg/vUdfRcqQ5M" className="bg-blue-600 px-2 py-4 rounded text-white">
            <i className="fab fa-discord mr-2"/>
            Join Our Discord Server!</a>
            <a href="https://discord.gg/vUdfRcqQ5M" className="bg-indigo-600 px-2 py-4 rounded text-white">
            <i className="fab fa-twitter mr-2"/>
            Follow Our Twitter Account!</a>
            </div>
        </div>
    </div>
)
}