package com.weex.app.extend;

import android.content.Intent;
import android.net.Uri;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;

import com.weex.app.WXPageActivity;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

public class WXEventModule extends WXModule {
    public static final String QUIT_APP_ACTION = "quit_app";
    @JSMethod()
    public void openURL(String url) {
        if (TextUtils.isEmpty(url)) {
            return;
        }
        Uri uri = Uri.parse(url);
        String scheme = uri.getScheme();

        if (scheme.equals("http") || scheme.equals("https") || scheme.equals("file")) {
            Intent renderIntent = new Intent(mWXSDKInstance.getContext(), WXPageActivity.class);
            renderIntent.setData(uri);
            mWXSDKInstance.getContext().startActivity(renderIntent);
        } else {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(uri);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    @JSMethod(uiThread = true)
    public void quitApp() {
        Intent intent = new Intent(QUIT_APP_ACTION);
        LocalBroadcastManager.getInstance(mWXSDKInstance.getContext()).sendBroadcast(intent);
    }
}
