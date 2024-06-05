// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{ Menu, MenuItem, Submenu };

#[tauri::command]
fn console_print(message: String) {
	println!("Message received: {message}");
}

fn main() {
	let file_menu = Submenu::new("File", Menu::new()
		.add_native_item(MenuItem::CloseWindow)
		.add_native_item(MenuItem::Quit)
	);

	let view_menu = Submenu::new("View", Menu::new()
		.add_native_item(MenuItem::EnterFullScreen)
	);

	let window_menu_inner = Menu::new()
		.add_native_item(MenuItem::Minimize)
		.add_native_item(MenuItem::Zoom);

	let window_menu = Submenu::new("Window", window_menu_inner);

	let menu = Menu::new()
		.add_submenu(file_menu)
		.add_submenu(view_menu)
		.add_submenu(window_menu);

  tauri::Builder::default()
		.menu(menu)
		.invoke_handler(tauri::generate_handler!(console_print))
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
