package com.mindcast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class AppConfig extends ReactContextBaseJavaModule {

    @Nonnull
    private final String appName;

    public AppConfig(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.app_name);
    }

    @Nonnull
    @Override
    public String getName() {
        return "AppConfig";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getAppName() {
        return appName;
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getPrimaryColor() {
        return "#fdf6e3";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getPrimaryTextColor() {
        return "#657b83";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getGreetingText() {
        return "Welcome";
    }
}