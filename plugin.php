<?php

/**
 * Plugin Name:       D2i School Task List Data Store
 * Description:       A custom built plugin to manage tasks assigned to schools. DO NOT DEACTIVATE.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ozzy Gonzalez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       d2i-school-task-list
 *
 */

function d2i_task_list_plugin_enqueue_assets()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_enqueue_script('d2i-task-list-plugin-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);
}

add_action('enqueue_block_editor_assets', 'd2i_task_list_plugin_enqueue_assets');

function activate_d2i_task_list_plugin()
{
    d2i_task_list_register_task_item();
    d2i_task_list_register_school();
    d2i_task_list_register_task_list();
}

function d2i_task_list_register_task_list()
{
    $labels = array(
        'name'               => _x('School Task Lists', 'post type general name', 'd2i-task-list'),
        'singular_name'      => _x('Task List', 'post type singular name', 'd2i-task-list'),
        'menu_name'          => _x('School Task Lists', 'admin menu', 'd2i-task-list'),
        'name_admin_bar'     => _x('School Task List', 'add new on admin bar', 'd2i-task-list'),
        'add_new'            => _x('Add New', 'list', 'd2i-task-list'),
        'add_new_item'       => __('Add New List', 'd2i-task-list'),
        'new_item'           => __('New List', 'd2i-task-list'),
        'edit_item'          => __('Edit List', 'd2i-task-list'),
        'view_item'          => __('View List', 'd2i-task-list'),
        'all_items'          => __('All Lists', 'd2i-task-list'),
        'search_items'       => __('Search Lists', 'd2i-task-list'),
        'not_found'          => __('No lists found', 'd2i-task-list'),
        'not_found_in_trash' => __('No lists found in Trash.', 'd2i-task-list')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Description.', 'd2i-task-list'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'task-list'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'show_in_rest'       => true,
        'rest_base'          => 'task-lists',
        'supports'           => array('title', 'custom-fields')
    );
    register_post_type('task-list', $args);
}

function d2i_task_list_register_task_item()
{
    $labels = array(
        'name'               => _x('School Task Items', 'post type general name', 'd2i-task-list'),
        'singular_name'      => _x('Task Item', 'post type singular name', 'd2i-task-list'),
        'menu_name'          => _x('School Task Items', 'admin menu', 'd2i-task-list'),
        'name_admin_bar'     => _x('School Task Item', 'add new on admin bar', 'd2i-task-list'),
        'add_new'            => _x('Add New', 'book', 'd2i-task-list'),
        'add_new_item'       => __('Add New Task', 'd2i-task-list'),
        'new_item'           => __('New Task', 'd2i-task-list'),
        'edit_item'          => __('Edit Task', 'd2i-task-list'),
        'view_item'          => __('View Task', 'd2i-task-list'),
        'all_items'          => __('All Tasks', 'd2i-task-list'),
        'search_items'       => __('Search Tasks', 'd2i-task-list'),
        'not_found'          => __('No tasks found', 'd2i-task-list'),
        'not_found_in_trash' => __('No tasks found in Trash.', 'd2i-task-list')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Description.', 'd2i-task-list'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'task-item'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'show_in_rest'       => true,
        'rest_base'          => 'task-items',
        'supports'           => array('title', 'custom-fields')
    );
    register_post_type('task-item', $args);
}

function d2i_task_list_register_school()
{
    $labels = array(
        'name'               => _x('Schoolw', 'post type general name', 'd2i-task-list'),
        'singular_name'      => _x('School', 'post type singular name', 'd2i-task-list'),
        'menu_name'          => _x('Schools', 'admin menu', 'd2i-task-list'),
        'name_admin_bar'     => _x('Schools', 'add new on admin bar', 'd2i-task-list'),
        'add_new'            => _x('Add New', 'book', 'd2i-task-list'),
        'add_new_item'       => __('Add New School', 'd2i-task-list'),
        'new_item'           => __('New School', 'd2i-task-list'),
        'edit_item'          => __('Edit School', 'd2i-task-list'),
        'view_item'          => __('View School', 'd2i-task-list'),
        'all_items'          => __('All Schools', 'd2i-task-list'),
        'search_items'       => __('Search Schools', 'd2i-task-list'),
        'not_found'          => __('No schools found', 'd2i-task-list'),
        'not_found_in_trash' => __('No schools found in Trash.', 'd2i-task-list')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Schhols', 'd2i-task-list'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'school'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'show_in_rest'       => true,
        'rest_base'          => 'schools',
        'supports'           => array('title', 'custom-fields', 'editor')
    );
    register_post_type('school', $args);
}

add_action('init', 'activate_d2i_task_list_plugin');

function d2i_task_list_plugin_flush_rewrites()
{
    activate_d2i_task_list_plugin();
    flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'd2i_task_list_plugin_flush_rewrites');

register_uninstall_hook(__FILE__, 'my_plugin_uninstall');
function my_plugin_uninstall()
{
    // Uninstallation stuff here
    unregister_post_type('task-item');
}

function d2i_get_tasks_by_school($data)
{
    $listName = $data->get_query_params()['directoryName'];
    // echo $listName;
    $args = array(
        'numberposts' => -1,
        'post_type'   => 'task-item',
        'meta_query'  => array(
            array(
                'key'     => 'school',
                'value'   => intval($data['schoolId']),
                'compare' => 'LIKE'
            ),
            array(
                'key'     => 'folder',
                'value'   => $listName,
                'compare' => 'LIKE'
            )
        ),
        'orderby'     => 'date',
        'order'       => 'ASC'
    );

    $posts = get_posts($args);

    $data = [];
    $i = 0;

    foreach ($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['isCompleted'] = get_field('is_completed', $post->ID);
        $data[$i]['newTaskType'] = get_field('task_type', $post->ID);
        $data[$i]['schoolName'] = get_field('school_name', $post->ID);
        $data[$i]['folder'] = get_field('folder', $post->ID);
        $data[$i]['documents'] = get_field('documents', $post->ID);
        $data[$i]['schoolId'] = get_field('school', $post->ID)[0];
        $document_link = get_field('document_link', $post->ID);
        if (!$document_link['title'] == null && !$document_link['url'] == null) {
            $data[$i]['documentLink'] = $document_link;
        }
        $i++;
    }

    return $data;
}

function d2i_get_tasks()
{
    // echo $data;
    $args = array(
        'numberposts' => -1,
        'post_type'   => 'task-item',
    );

    $posts = get_posts($args);

    $data = [];
    $i = 0;

    foreach ($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['slug'] = $post->post_name;
        $data[$i]['isCompleted'] = get_field('is_completed', $post->ID);
        $data[$i]['taskType'] = get_field('task_type', $post->ID);
        $data[$i]['schoolName'] = get_field('school_name', $post->ID);
        $data[$i]['folder'] = get_field('folder', $post->ID);
        $data[$i]['documents'] = get_field('documents', $post->ID);
        $data[$i]['schoolId'] = get_field('school', $post->ID)[0];
        $i++;
    }

    return $data;
}

function d2i_create_task($request)
{
    $request_body = $request->get_json_params();
    $metaInput = array(
        'school'        => [$request['schoolId']],
        'is_completed'  => $request['isCompleted'],
        'task_type'     => $request['newTaskType'],
        'folder'        => $request['directoryName']
    );
    if (!$request['documentLink']) {
        $metaInput['document_link'] = array(
            'title' => $request['documentLink']['title'],
            'url'   => $request['documentLink']['url']
        );
    }

    $new_task = array(
        'post_type'   => 'task-item',
        'post_title'  => $request_body['title'],
        'meta_input'  => array(
            'school'        => [$request['schoolId']],
            'is_completed'  => $request['isCompleted'],
            'task_type'     => $request['newTaskType'],
            'folder'        => $request['directoryName'],
            'document_link' => array(
                'title' => $request['documentLink']['title'],
                'url'   => $request['documentLink']['url']
            )
        ),
        'post_status' => 'publish'
    );
    $new_task_id = wp_insert_post($new_task);

    $post = get_post($new_task_id);

    $data = array();

    $data['id'] = $post->ID;
    $data['title'] = $post->post_title;
    $data['slug'] = $post->post_name;
    $data['isCompleted'] = get_field('is_completed', $post->ID);
    $data['newTaskType'] = get_field('task_type', $post->ID);
    $data['schoolName'] = get_field('school_name', $post->ID);
    $data['folder'] = get_field('folder', $post->ID);
    $data['schoolId'] = get_field('school', $post->ID)[0];
    $document_link = get_field('document_link', $post->ID);
    if (!$document_link['title'] == null && !$document_link['url'] == null) {
        $data['documentLink'] = $document_link;
    }

    return $data;
}

function d2i_update_task($request)
{
    $request_body = $request->get_json_params();
    $new_task = array(
        'ID'          => $request['id'],
        'post_type'   => 'task-item',
        'post_title'  => $request_body['title'],
        'meta_input'  => array(
            'school'       => [$request['schoolId']],
            'is_completed' => $request['isCompleted'],
            'task_type'    => $request['newTaskType'],
            'folder'       => $request['folder']
        )
    );
    $new_task_id = wp_update_post($new_task);

    $post = get_post($new_task_id);

    return $post;
}

function d2i_schools($data)
{

    $args = [
        'numberposts' => -1,
        'post_type' => 'school'
    ];

    $posts = get_posts($args);

    $data = [];
    $i = 0;

    foreach ($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['slug'] = $post->post_name;
        $data[$i]['isCompleted'] = get_field('is_completed', $post->ID);
        $data[$i]['newTaskType'] = get_field('task_type', $post->ID);
        $data[$i]['schoolName'] = get_field('school_name', $post->ID);
        $data[$i]['folder'] = get_field('folder', $post->ID);
        $data[$i]['documents'] = get_field('documents', $post->ID);
        $data[$i]['schoolId'] = get_field('school', $post->ID)[0];
        $i++;
    }

    return $data;
}

// add_action('rest_api_init', function () {
//     register_rest_route('d2i-task-list/v1', 'task-items', array(
//         'methods' => 'GET',
//         'callback' => 'd2i_get_tasks'
//     ));

//     register_rest_route('d2i-task-list/v1', 'task-items', array(
//         'methods' => 'POST',
//         'callback' => 'd2i_create_task'
//     ));

//     register_rest_route('d2i-task-list/v1', 'task-items/(?P<schoolId>\d+)', array(
//         'methods' => 'POST',
//         'callback' => 'd2i_update_task'
//     ));

//     register_rest_route('d2i-task-list/v1', 'task-items/(?P<schoolId>\d+)', array(
//         'methods' => 'GET',
//         'callback' => 'd2i_get_tasks_by_school'
//     ));

//     register_rest_route('d2i-school-list/v1', 'schools', array(
//         'methods' => 'GET',
//         'callback' => 'd2i_schools'
//     ));
// });

add_filter('manage_task-item_posts_columns', 'set_custom_edit_task_item_columns');
function set_custom_edit_task_item_columns($columns)
{
    $columns['school'] = __('School', 'd2i_task_list');
    $columns['folder'] = __('Folder', 'd2i_task_list');

    return $columns;
}

add_action('manage_task-item_posts_custom_column', 'custom_book_column', 10, 2);
function custom_book_column($column, $post_id)
{
    switch ($column) {
        case 'school':
            $school_id = get_field('school', $post_id)[0];
            $school_name = 'No school assigned';
            if ($school_id) {
                $school = get_post($school_id);
                $school_name = $school->post_title;
            }
            echo $school_name;
            break;
        case 'folder':
            $folder = get_field('folder', $post_id);
            $folder_name = 'No folder specified';
            if ($folder) {
                $folder_name = $folder;
            }
            echo $folder_name;
            break;
    }
}

require_once('lib/TasksController.php');

function d2i_register_routes()
{
    $controller = new D2i_Tasks_Custom_Routes();
    $controller->register_routes();
}

add_action('rest_api_init', 'd2i_register_routes');
