package com.mindcast;

import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;

public class AppConfig extends ReactContextBaseJavaModule {
    private final String appName;
    private final String appUid;

    AppConfig(ReactApplicationContext context) {
        super(context);
        appName = getReactApplicationContext().getResources().getString(R.string.app_name);
        appUid = getReactApplicationContext().getResources().getString(R.string.app_uid);
    }

    @Override
    public String getName() {
        return "AppConfig";
    }

    @ReactMethod
    public void appName(Promise promise) {
        promise.resolve(appName);
    }

    @ReactMethod
    public void appUid(Promise promise) {
        promise.resolve(appUid);
    }
}
