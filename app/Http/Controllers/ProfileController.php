<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ProfileController extends Controller
{
    public function edit(Request $request) { return Inertia::render('Profile/Edit', ['user' => $request->user()]); }
    public function update(Request $request) { $request->user()->update($request->validate(['name' => 'required|string|max:255'])); return back(); }
    public function destroy(Request $request) { $request->validate(['password' => 'required|current_password']); $user = $request->user(); auth()->logout(); $user->delete(); $request->session()->invalidate(); $request->session()->regenerateToken(); return redirect('/'); }
}
