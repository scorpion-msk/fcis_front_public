
{
    "success": false,
    "error": {
        "data": "Unauthorized",
        "code": "Unauthorized",
        "message": "Unauthorized",
        "backtrace": [
            "/usr/src/app/app/controllers/concerns/auth_helper.rb:10:in `authenticate!'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:400:in `block in make_lambda'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:180:in `block (2 levels) in halting_and_conditional'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/abstract_controller/callbacks.rb:34:in `block (2 levels) in \u003cmodule:Callbacks\u003e'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:181:in `block in halting_and_conditional'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:595:in `block in invoke_before'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:595:in `each'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:595:in `invoke_before'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:106:in `run_callbacks'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/abstract_controller/callbacks.rb:233:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal/rescue.rb:22:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal/instrumentation.rb:67:in `block in process_action'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/notifications.rb:206:in `block in instrument'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/notifications/instrumenter.rb:24:in `instrument'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/notifications.rb:206:in `instrument'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal/instrumentation.rb:66:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal/params_wrapper.rb:259:in `process_action'",
            "/usr/local/bundle/gems/activerecord-7.0.3/lib/active_record/railties/controller_runtime.rb:27:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/abstract_controller/base.rb:151:in `process'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal.rb:188:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_controller/metal.rb:251:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/routing/route_set.rb:49:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/routing/route_set.rb:32:in `serve'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/journey/router.rb:50:in `block in serve'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/journey/router.rb:32:in `each'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/journey/router.rb:32:in `serve'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/routing/route_set.rb:852:in `call'",
            "/usr/local/bundle/gems/rack-2.2.3.1/lib/rack/etag.rb:27:in `call'",
            "/usr/local/bundle/gems/rack-2.2.3.1/lib/rack/conditional_get.rb:27:in `call'",
            "/usr/local/bundle/gems/rack-2.2.3.1/lib/rack/head.rb:12:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/callbacks.rb:99:in `run_callbacks'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/callbacks.rb:26:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/show_exceptions.rb:26:in `call'",
            "/usr/local/bundle/gems/railties-7.0.3/lib/rails/rack/logger.rb:40:in `call_app'",
            "/usr/local/bundle/gems/railties-7.0.3/lib/rails/rack/logger.rb:25:in `block in call'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/tagged_logging.rb:114:in `block in tagged'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/tagged_logging.rb:38:in `tagged'",
            "/usr/local/bundle/gems/activesupport-7.0.3/lib/active_support/tagged_logging.rb:114:in `tagged'",
            "/usr/local/bundle/gems/railties-7.0.3/lib/rails/rack/logger.rb:25:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/remote_ip.rb:93:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/request_id.rb:26:in `call'",
            "/usr/local/bundle/gems/rack-2.2.3.1/lib/rack/runtime.rb:22:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/executor.rb:14:in `call'",
            "/usr/local/bundle/gems/rack-2.2.3.1/lib/rack/sendfile.rb:110:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.3/lib/action_dispatch/middleware/host_authorization.rb:131:in `call'",
            "/usr/local/bundle/gems/rack-cors-1.1.1/lib/rack/cors.rb:100:in `call'",
            "/usr/local/bundle/gems/railties-7.0.3/lib/rails/engine.rb:530:in `call'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/configuration.rb:252:in `call'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/request.rb:77:in `block in handle_request'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/thread_pool.rb:340:in `with_force_shutdown'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/request.rb:76:in `handle_request'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/server.rb:441:in `process_client'",
            "/usr/local/bundle/gems/puma-5.6.4/lib/puma/thread_pool.rb:147:in `block in spawn_thread'"
        ]
    }
}

{
    "success": false,
    "error": {
        "data": "FcisCommon::Unauthorized",
        "code": "FcisCommon::Unauthorized",
        "message": "FcisCommon::Unauthorized",
        "backtrace": [
            "/usr/src/app/app/controllers/application_controller.rb:16:in `authenticate!'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:400:in `block in make_lambda'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:180:in `block (2 levels) in halting_and_conditional'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/abstract_controller/callbacks.rb:34:in `block (2 levels) in \u003cmodule:Callbacks\u003e'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:181:in `block in halting_and_conditional'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:595:in `block in invoke_before'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:595:in `each'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:595:in `invoke_before'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:106:in `run_callbacks'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/abstract_controller/callbacks.rb:233:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal/rescue.rb:23:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal/instrumentation.rb:67:in `block in process_action'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/notifications.rb:206:in `block in instrument'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/notifications/instrumenter.rb:24:in `instrument'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/notifications.rb:206:in `instrument'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal/instrumentation.rb:66:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal/params_wrapper.rb:259:in `process_action'",
            "/usr/local/bundle/gems/activerecord-7.0.6/lib/active_record/railties/controller_runtime.rb:27:in `process_action'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/abstract_controller/base.rb:151:in `process'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal.rb:188:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_controller/metal.rb:251:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/routing/route_set.rb:49:in `dispatch'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/routing/route_set.rb:32:in `serve'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/journey/router.rb:50:in `block in serve'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/journey/router.rb:32:in `each'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/journey/router.rb:32:in `serve'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/routing/route_set.rb:852:in `call'",
            "/usr/local/bundle/gems/rack-2.2.7/lib/rack/etag.rb:27:in `call'",
            "/usr/local/bundle/gems/rack-2.2.7/lib/rack/conditional_get.rb:27:in `call'",
            "/usr/local/bundle/gems/rack-2.2.7/lib/rack/head.rb:12:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/callbacks.rb:99:in `run_callbacks'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/callbacks.rb:26:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/debug_exceptions.rb:28:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/show_exceptions.rb:29:in `call'",
            "/usr/local/bundle/gems/railties-7.0.6/lib/rails/rack/logger.rb:40:in `call_app'",
            "/usr/local/bundle/gems/railties-7.0.6/lib/rails/rack/logger.rb:25:in `block in call'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/tagged_logging.rb:99:in `block in tagged'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/tagged_logging.rb:37:in `tagged'",
            "/usr/local/bundle/gems/activesupport-7.0.6/lib/active_support/tagged_logging.rb:99:in `tagged'",
            "/usr/local/bundle/gems/railties-7.0.6/lib/rails/rack/logger.rb:25:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/remote_ip.rb:93:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/request_id.rb:26:in `call'",
            "/usr/local/bundle/gems/rack-2.2.7/lib/rack/runtime.rb:22:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/executor.rb:14:in `call'",
            "/usr/local/bundle/gems/rack-2.2.7/lib/rack/sendfile.rb:110:in `call'",
            "/usr/local/bundle/gems/actionpack-7.0.6/lib/action_dispatch/middleware/host_authorization.rb:131:in `call'",
            "/usr/local/bundle/gems/rack-cors-2.0.1/lib/rack/cors.rb:102:in `call'",
            "/usr/local/bundle/gems/railties-7.0.6/lib/rails/engine.rb:530:in `call'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/configuration.rb:252:in `call'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/request.rb:77:in `block in handle_request'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/thread_pool.rb:340:in `with_force_shutdown'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/request.rb:76:in `handle_request'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/server.rb:443:in `process_client'",
            "/usr/local/bundle/gems/puma-5.6.6/lib/puma/thread_pool.rb:147:in `block in spawn_thread'"
        ]
    }
}