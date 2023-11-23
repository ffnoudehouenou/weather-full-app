import React from 'react';

const Dashboard = () => {
    return(
        <>
       
            <nav class="bg-black p-4 text-white">
                <div class="container mx-auto">
                    <h1 class="text-2xl font-semibold">Dashboard Météo</h1>
                </div>
            </nav>

            
            <div class="container mx-auto mt-8">

                
                <div class="text-right mb-4">
                    <span class="text-sm">Connecté en tant que: <strong>Username</strong></span>
                </div>

                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    
                    <div class="bg-black p-6 rounded-md border border-slate-300">
                        <h2 class="text-lg font-semibold mb-4">Ville 1</h2>
                        
                        <p>Température: 20°C</p>
                        <p>Conditions: Ensoleillé</p>
                    </div>

                    
                    <div class="bg-black p-6 rounded-md shadow-md border border-slate-300">
                        <h2 class="text-lg font-semibold mb-4">Ville 2</h2>
                        <p>Température: 22°C</p>
                        <p>Conditions: Nuageux</p>
                    </div>

                    
                    <div class="bg-black p-6 rounded-md shadow-md border border-slate-300">
                        <h2 class="text-lg font-semibold mb-4">Ville 3</h2>
                        <p>Température: 18°C</p>
                        <p>Conditions: Pluvieux</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;